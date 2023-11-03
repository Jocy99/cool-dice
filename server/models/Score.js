const { Schema, Types, model } = require("mongoose");

const scoreSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: timestamp () get date format from mini project
    },
    username: {
        type: String,
        required: true,
    }, 
});

const Score = model('Score', scoreSchema);

module.exports = Score;