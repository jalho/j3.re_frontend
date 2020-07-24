import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery, gql } from '@apollo/client';

// TODO: Modularize this!
const NOTES = gql`
  query Notes {
    notes {
      id
      content
      time
    }
  }
`;

const LeaveNote: React.FC = () => {
  const { t } = useTranslation();
  const { loading, data } = useQuery(NOTES);

  return (
    <>
      <div style={{ textAlign: "center", maxWidth: "30em" }}>
        <p>{t("Here's going to be a notes leaving feature. The notes won't be translated, instead they will remain in their original language.")}</p>
        <p>{t("Below are some example fetched from a database.")}</p>
      </div>
      {loading && <p>Loading...</p>}
      {data && data.notes.map((note: { id: any; time: any; content: any; }) => ( // TODO: Use `Note` type!
        <p key={note.id} style={{ backgroundColor: "rgb(1, 2, 3, 0.1)", borderRadius: "0.5em", padding: "1em" }}>
          <b>{`${new Date(note.time).getUTCDate()}.${new Date(note.time).getUTCMonth()+1}.${new Date(note.time).getUTCFullYear()}`}</b>
          <br/>
          <i>{note.content}</i>
        </p>
      ))}
    </>
  );
};

export default LeaveNote;
