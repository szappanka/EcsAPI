const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    code: {
        type: Number,
        default: function() {
            return Math.floor(Math.random() * 100000);;
        }
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    puzzles: {
        type: Object,
        default: []
    },
    helps: {
        type: Number,
        default: 3
    },
    startDate: {
        type: Date,
        default: null
    },
    current: {
        type: Number,
        default: 0
    },
    playerNumber: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Game', GameSchema);