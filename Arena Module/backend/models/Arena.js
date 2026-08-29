const mongoose = require("mongoose");

const arenaSchema = new mongoose.Schema({
    arenaName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    prize: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    startTime: {
        type: String,
        required: true
    },

    endTime: {
        type: String,
        required: true
    },

    arenaLink: {
        type: String,
        required: true
    },

    winners: [
        {
            name: {
                type: String,
                required: true
            },

            position: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model("Arena", arenaSchema);