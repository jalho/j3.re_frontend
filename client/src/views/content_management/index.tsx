import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useMutation, useLazyQuery, useSubscription, useApolloClient } from "@apollo/client";
import Button from "react-bootstrap/Button";

import { StateCombinedFromReducers, Project, Note } from "../../types";
import { 
  GET_ALL_NOTES,
  TOGGLE_NOTE_APPROVAL,
  GET_ALL_APPROVED_NOTES,
  GET_ALL_PROJECTS,
  TOGGLE_PROJECT_VISIBILITY,
  NOTE_ADDED
} from "../../utils/graphql";
import Card from "../../components/Card";

const ContentManagement: React.FC = () => {
  const { t } = useTranslation();
  const authentication = useSelector((state: StateCombinedFromReducers) => {
    return state.authenticationReducer.authentication;
  });
  const [getAllNotes, { data: allNotesData }] = useLazyQuery(GET_ALL_NOTES);
  const [getAllProjects, { data: allProjectsData }] = useLazyQuery(GET_ALL_PROJECTS);
  const [ mutateApproval ] = useMutation(TOGGLE_NOTE_APPROVAL);
  const [ mutateVisibility ] = useMutation(TOGGLE_PROJECT_VISIBILITY);
  const client = useApolloClient();

  /**
   * Toggle a note's approval and refetch approved notes' query to rerender them in other views.
   */
  const toggleApproval = (noteID: string): void => {
    mutateApproval({
      variables: { id: noteID },
      refetchQueries: [{ query: GET_ALL_APPROVED_NOTES }]
    });
  };

  /**
   * Toggle a project's visibility and refetch all notes' query to rerender them in other views.
   */
  const toggleVisibility = (projectID: string): void => {
    mutateVisibility({
      variables: { id: projectID },
      refetchQueries: [{ query: GET_ALL_PROJECTS }]
    });
  };

  // Query all notes on mount.
  useEffect(() => {
    getAllNotes();
    getAllProjects();
  }, [getAllNotes, getAllProjects]);

  // update Apollo's cache with the new note
  useSubscription(NOTE_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      // get existing
      const cachedDataOld = client.readQuery({ query: GET_ALL_NOTES });
      const existingNotes: Array<Note> = cachedDataOld.allNotes;
      // add new
      const addedNote = subscriptionData.data.noteAdded;
      client.writeQuery({
        query: GET_ALL_NOTES,
        data: { allNotes: existingNotes.concat(addedNote) }
      });
    }
  });

  // non authorized view
  if (!authentication || !authentication.user.roles.includes("admin")) {
    return (
      <div id="contentManagement">
        <p>{t("Content management is only available to admins.")}</p>
      </div>
    );
  }

  const noteVisibleCharsCount = 50;

  // authorized view
  return (
    <div id="contentManagement" className="view">
      <div className="item">
        <Card
          infoText={t("PROJECTS_VISIBILITY")}
          items={!allProjectsData ? null : allProjectsData.projects.map((project: Project, idx: number) => (
            <div key={idx} className="projectItem">
              <i>{project.name}</i>
              <span className="visibilityText">
                <span>{t("VISIBILITY_LABEL")}</span>
                <code style={{ color: project.visible ? "lightgreen" : "pink" }}>
                  {project.visible.toString()}
                </code>
              </span>
              <Button
                onClick={(): void => toggleVisibility(project.id)}
                variant={project.visible ? "secondary" : undefined}
              >
                {project.visible ? t("Hide") : t("Show")}
              </Button>
            </div>
          ))}
        />
      </div>
      <div className="item">
        <Card
          infoText={t("NOTES_APPROVAL")}
          items={!allNotesData ? null : allNotesData.allNotes.map((note: { content: string; approved: boolean; id: string; }, idx: number) => (
            <div key={idx} className="noteItem">
              <i>{note.content.substring(0, noteVisibleCharsCount) + (note.content.length > noteVisibleCharsCount ? "..." : "")}</i>
              <span className="approvalText">
                <span>{t("APPROVED_LABEL")}</span>
                <code style={{ color: note.approved ? "lightgreen" : "pink" }}>
                  {note.approved.toString()}
                </code>
              </span>
              <Button
                onClick={(): void => toggleApproval(note.id)}
                variant={note.approved ? "secondary" : undefined}
              >
                {note.approved ? t("Disapprove") : t("Approve")}
              </Button>
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default ContentManagement;
