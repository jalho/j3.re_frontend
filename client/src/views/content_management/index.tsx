import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useMutation, useLazyQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";

import { StateCombinedFromReducers } from "../../types";
import { GET_ALL_NOTES, TOGGLE_NOTE_APPROVAL, GET_ALL_APPROVED_NOTES } from "../../utils/graphql";
import Card from "../../components/Card";

const ContentManagement: React.FC = () => {
  const { t } = useTranslation();
  const authentication = useSelector((state: StateCombinedFromReducers) => {
    return state.authenticationReducer.authentication;
  });
  const [getAllNotes, { data: allNotesData }] = useLazyQuery(GET_ALL_NOTES);
  const [ mutateApproval ] = useMutation(TOGGLE_NOTE_APPROVAL);

  /**
   * Toggle a note's approval and refetch approved notes' query to rerender them in other views.
   */
  const toggleApproval = (noteID: string): void => {
    mutateApproval({
      variables: { id: noteID },
      refetchQueries: [{ query: GET_ALL_APPROVED_NOTES }]
    });
  };

  // Query all notes on mount.
  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  // non authorized view
  if (!authentication || !authentication.user.roles.includes("admin")) {
    return (
      <div id="contentManagement">
        <p>{t("Content management is only available to admins.")}</p>
      </div>
    );
  }

  // authorized view
  return (
    <div id="contentManagement">
      <Card
        infoText="Notes approval"
        items={!allNotesData ? null : allNotesData.allNotes.map((note: { content: string; approved: boolean; id: string; }, idx: number) => (
          <div key={idx} className="noteItem">
            <i>{note.content}</i>
            <span className="approvalText"><span>{t("APPROVED_LABEL")}</span><code style={{ color: note.approved ? "lightgreen" : "pink" }}>{note.approved.toString()}</code></span>
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
  );
};

export default ContentManagement;
