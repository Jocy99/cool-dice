// imports user and score models
const { User, Score } = require('../models');
// imports signToken and AuthenticationError
const { signToken, AuthenticationError } = require('../utils/auth');
// adds functions that will be called in typeDefs
const resolvers = {
   Query: {
      // adds the read functions here
      users: async () => {
         const users = await User.find().populate('score');
         console.log('USERS QUERY:', users);
         return users;
      },
      user: async (parent, { userId }) => {
         return User.findOne({ _id: userId });
      },
      me: async (parent, args, context) => {
         if (context.user) {
            return User.findOne({ _id: context.user._id });
         }
         throw AuthenticationError;
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
         const user = await User.findOne({ email }).populate('score');
         if (!user) {
            throw AuthenticationError;
         }
         const correctPw = await user.isCorrectPassword(password);
         if (!correctPw) {
            throw AuthenticationError;
         }
         const totalRolls = user.score.totalRolls;
         const totalWins = user.score.totalWins;
         const newUser = {
            ...user,
            totalRolls,
            totalWins,
         };
         console.log('$$$', newUser);
         const token = signToken(newUser);
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
               { $set: { score: score._id } },
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
