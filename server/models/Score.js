// imports the schema and model from mongoose
const { Schema, model } = require('mongoose');
// adds a new schema called scoreSchema
const scoreSchema = new Schema({
   totalRolls: {
      type: Number,
      default: 0,
   },
   totalWins: {
      type: Number,
      default: 0,
   },
});
// adds a new model called Score using the scoreSchema
const Score = model('Score', scoreSchema);
// exports the model
module.exports = Score;
