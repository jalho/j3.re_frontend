import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";

import { StateCombinedFromReducers } from "../../types";
import { GET_ALL_NOTES } from "../../utils/graphql";
import Card from "../../components/Card";

const ContentManagement: React.FC = () => {
  const { t } = useTranslation();
  const authentication = useSelector((state: StateCombinedFromReducers) => {
    return state.authenticationReducer.authentication;
  });
  const { data } = useQuery(GET_ALL_NOTES);

  /**
   * Toggle a note's approval. TODO: Implement using a mutation!
   */
  const toggleApproval = (noteID: string): void => {
    console.log("TODO: Toggle approval for note with ID: ", noteID);
  };

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
        items={!data ? null : data.allNotes.map((note: { content: string; approved: boolean; id: string; }, idx: number) => (
          <div key={idx} className="noteItem">
            <i>{`${note.content.substring(0, 60)}${note.content.length > 60 ? "..." : ""}`}</i>
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
