// imports user and score models
const { User, Score } = require('../models');
// imports signToken and AuthenticationError
const { signToken, AuthenticationError } = require('../utils/auth');
// adds functions that will be called in typeDefs
const resolvers = {
   Query: {
      // adds the read functions here
      users: async () => {
         return User.find().populate('scores');
      },
   },
   Mutation: {
      // adds the write functions here
      addUser: async (parent, { username, email, password }) => {
         const user = await User.create({ username, email, password });
         const token = signToken(user);
         return { token, user };
      },
      login: async (parent, { email, password }) => {
         const user = await User.findOne({ email });
         if (!user) {
            throw AuthenticationError;
         }
         const correctPw = await user.isCorrectPassword(password);
         if (!correctPw) {
            throw AuthenticationError;
         }
         const token = signToken(user);
         return { token, user };
      },
      addScore: async (parent, { totalRolls, totalWins }, context) => {
         if (context.user) {
            const score = await Score.create({
               totalRolls,
               totalWins,
            });
            const user = await User.findOneAndUpdate(
               { _id: context.user._id },
               { $addToSet: { scores: score._id } },
               { new: true }
            );
            return user;
         }
         throw AuthenticationError;
      },
   },
};
// exports the model
module.exports = resolvers;
