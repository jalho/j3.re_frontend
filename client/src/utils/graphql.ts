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
        roles
      }
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      categories
      description {
        en
        fi
      }
      technologies
      startTime
      repositories
    }
  }
`;

export const GET_MY_IP = gql`
  query MyIP {
    myIP {
      ip
      city
      isp
      mobile
      proxy
      flagURL
    }
  }
`;

export const GET_ALL_NOTES = gql`
  query AllNotes {
    allNotes {
      id
      content
      time
      approved
    }
  }
`;
