// imports the apollo client
import { gql } from '@apollo/client';
<<<<<<< HEAD

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

=======
// exports reading query from apollo
export const QUERY_USERS = gql`
   query Users {
      users {
         email
         username
         scores {
            totalRolls
            totalWins
         }
      }
   }
`;
>>>>>>> 8ef72717ddecb3a73ddcccbb7a3f894eb609e601
