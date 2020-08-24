import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLazyQuery, useSubscription, useApolloClient } from "@apollo/client";

import { GET_ALL_APPROVED_NOTES, NOTE_APPROVAL_TOGGLED } from "../../utils/graphql";
import { Note } from "../../types";

const LeaveNote: React.FC = () => {
  const { t } = useTranslation();
  const [getAllApprovedNotes, { data, loading, error }] = useLazyQuery(GET_ALL_APPROVED_NOTES);
  const [ serverStatusMsg, setServerStatusMsg ] = useState<string>();
  const client = useApolloClient();

  /**
   * Get updated approved notes cache.
   * @param note received in subscription data containing ID and approval status
   */
  const getUpdatedApprovedNotesCache = (note: Note): Array<Note> => {
    let oldCache = client.readQuery({ query: GET_ALL_APPROVED_NOTES });
    oldCache = oldCache.approvedNotes;
    // keep other notes
    const updatedCache: Array<Note> = oldCache.filter((n: Note) => n.id !== note.id);
    // add updated note if it's approved
    if (note.approved) {
      updatedCache.push(note);
    }
    return updatedCache;
  };

  useEffect(
    () => {
      if (error) setServerStatusMsg(t("Server is not operational."));
      const timerID = setTimeout(
        () => {
          if (loading) setServerStatusMsg(t("The server seems to be sleeping. Wait a moment, waking it up..."));
        }, 1000
      );
      return (): void => clearTimeout(timerID);
    }, [loading, t, error]
  );

  // Query all approved notes on mount
  useEffect(() => {
    getAllApprovedNotes();
  }, [getAllApprovedNotes]);

  useSubscription(NOTE_APPROVAL_TOGGLED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const updatedNote = subscriptionData.data.noteApprovalChanged;
      client.writeQuery({
        query: GET_ALL_APPROVED_NOTES,
        data: {
          approvedNotes: getUpdatedApprovedNotesCache(updatedNote)
        }
      });
    }
  });

  // create JSX elements of fetched notes
  let noteElements: Array<JSX.Element> = [];
  if (data && data.approvedNotes) noteElements = data.approvedNotes.map((note: Note) => (
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
