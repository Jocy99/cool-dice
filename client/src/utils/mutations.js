// imports the apollo client
import { gql } from '@apollo/client';
// exports the writing functions from apollo
export const LOGIN_USER = gql`
   mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
      }
   }
`;
export const ADD_USER = gql`
   mutation AddUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
         token
      }
   }
`;
export const ADD_SCORE = gql`
   mutation AddScore($totalRolls: Int!, $totalWins: Int!) {
      addScore(totalRolls: $totalRolls, totalWins: $totalWins) {
         username
         score {
            totalRolls
            totalWins
         }
      }
   }
`;
