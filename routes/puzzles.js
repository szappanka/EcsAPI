const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Game = require('../models/Puzzle');

router.get('/', (req, res) => {
    res.send('Puzzle');
});

module.exports = router;