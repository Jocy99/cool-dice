// calls the functions from the resolvers file
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    scores: [Score]!
  }
  type Score {
    _id: ID
    totalRolls: Int
    totalWins: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addScore(totalRolls: Int!, totalWins: Int!): User
  }
`;
// exports the typeDefs
module.exports = typeDefs;
