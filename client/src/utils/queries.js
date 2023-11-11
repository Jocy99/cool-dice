import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query allUsers {
    users {
      username
      score
    }
  }
`;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

