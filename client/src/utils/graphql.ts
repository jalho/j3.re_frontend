import { gql } from '@apollo/client';

export const GET_ALL_NOTES = gql`
  query Notes {
    notes {
      id
      content
      time
    }
  }
`;

export const GET_ALL_USERS = gql`
  query Users {
    users {
      id
      username
      passwordHash
    }
  }
`;

export const GET_ONE_USER = gql`
  query OneUser($username: String!) {
    oneUser(username: $username) {
      id
      username
      passwordHash
    }
  }
`;
