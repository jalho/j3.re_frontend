import { gql } from "@apollo/client";

export const GET_ALL_APPROVED_NOTES = gql`
  query ApprovedNotes {
    approvedNotes {
      id
      content
      time
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        username
        id
      }
    }
  }
`;
