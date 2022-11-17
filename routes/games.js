const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Game = require('../models/Game');

router.get('/', (req, res) => {
    res.send('Game root route');
});


// submits a new game
router.post('/new', async (req, res) => {
    
    const game = new Game(); // amíg nem lesz egyedi sorsolja újra
    try{
        const saved = await game.save((e) => console.log(e));
        res.json(game.code);
    } catch (e){
        res.json({message: e});
    }
});

// return with all of the games
router.get('/all', async (req, res) => {
    try{
        const games = await Game.find();
        res.json(games);
    } catch(e){
        res.json({message: e});
    }
});

// megad egy specifikus játékot a kód alapján
router.get('/:gameCode', async (req, res) => {
    try{
        const game = await Game.find({code: req.params.gameCode});
        res.json(game);
    } catch(e){
        res.json({message: e});
    }
});

// töröl egy játékot
router.delete('/:gameCode', async (req, res) => {
    try{
        const game = await Game.remove({code: req.params.gameCode});
        res.json({ message: `${req.params.gameCode} successfully deleted` } );
    } catch(e){
        res.json({message: e});
    }
});

// megoldottnak nyilvánít egy feladványt
router.patch('/solve/:gameCode', async (req, res) => {
    try{

        const old = await Game.findOne({code: req.params.gameCode});
        
        const game = await Game.findOneAndUpdate(
            { code: req.params.gameCode },
            { $set: {current: old.current+1} }
        );
        res.json(game);
    } catch(e){
        res.json({message: e});
    }
});

// hintet ad az aktuális játékhoz


module.exports = router;