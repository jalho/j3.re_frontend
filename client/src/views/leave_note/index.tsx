import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";

import { GET_ALL_APPROVED_NOTES } from "../../utils/graphql";
import { Note } from "../../types";

const LeaveNote: React.FC = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_ALL_APPROVED_NOTES);
  const [ serverStatusMsg, setServerStatusMsg ] = useState<string>();

  useEffect(
    () => {
      if (error) setServerStatusMsg(t("Server is not operational."));
      setTimeout(
        () => {
          if (loading) setServerStatusMsg(t("The server seems to be sleeping. Wait a moment, waking it up..."));
        }, 1000
      );
    }, [loading, t, error]
  );

  // create JSX elements of fetched notes
  let noteElements: Array<JSX.Element> = [];
  if (data) noteElements = data.approvedNotes.map((note: Note) => (
    <div key={note.id} className="note">
      <p>
        <b>{`${new Date(note.time).getUTCDate()}.${new Date(note.time).getUTCMonth()+1}.${new Date(note.time).getUTCFullYear()}`}</b>
        <br/>
        <i>{note.content}</i>
      </p>
    </div>
  ));

  return (
    <>
      <div id="leaveNoteInfoText">
        <p>{t("Here's going to be a notes leaving feature. The notes won't be translated, instead they will remain in their original language.")}</p>
      </div>
      
      {/* render info text & notes only if there are some notes */}
      {noteElements.length > 0 ?
         [
          <div key="info" id="leaveNoteInfoText">
            <p>
              {t("Below are some examples fetched from a database.")}
            </p>
          </div>,
          ...noteElements
        ] :
        <p>{serverStatusMsg}</p>
      }
    </>
  );
};

export default LeaveNote;
