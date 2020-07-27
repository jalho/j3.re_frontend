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
