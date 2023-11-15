// imports the apollo client
import { gql } from '@apollo/client';
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

export const QUERY_ME = gql`
   query me {
      me {
         _id
         email
         scores
      }
   }
`;
