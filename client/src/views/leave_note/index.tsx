import React from "react";
import { useTranslation } from "react-i18next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";

const testQuery = () => {
  const client = new ApolloClient({
    uri: "https://j3re-backend.herokuapp.com/", // TODO: Get from environment!
    cache: new InMemoryCache()
  });

  client
  .query({
    query: gql`
      query GetNotes {
        notes {
          id
          content
          time
        }
      }
    `
  })
  .then(result => console.log(result));
}

const LeaveNote: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("Work in progress.")}</p>
      <Button variant="primary" onClick={() => testQuery()}>Test GraphQL in console</Button>
    </>
  );
};

export default LeaveNote;
