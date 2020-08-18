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
        items={!data ? null : data.allNotes.map((note: { content: string; approved: boolean; }, idx: number) => (
          <div key={idx} className="noteItem">
            <i>{`${note.content.substring(0, 60)}${note.content.length > 60 ? "..." : ""}`}</i>
            <span className="approvalText"><span>{t("APPROVED_LABEL")}</span><code style={{ color: note.approved ? "lightgreen" : "pink" }}>{note.approved.toString()}</code></span>
            <Button
              onClick={(): void => console.log("TODO: Implement approval change mutation.")}
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
