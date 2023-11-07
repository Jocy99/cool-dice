const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
   totalRolls: {
      type: Number,
      default: 0,
   },
   totalWins: {
      type: Number,
      default: 0,
   },
   totalLosses: {
      type: Number,
      default: 0,
   },
   createdAt: {
      type: Date,
      default: Date.toLocaleString(),
   },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
