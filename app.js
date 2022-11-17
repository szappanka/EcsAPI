const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// import dotenv
//require('dotenv').config();

require('dotenv/config')

app.use(bodyParser.json());

const gamesRoute = require('./routes/games');

// middlewares
app.use('/game', gamesRoute); 


// routes
app.get('/', (req, res) => {
    res.send('Home'); // írja ki az összes route-t
});

mongoose.connect(process.env.DB_CONNECTION, {
    
    useNewUrlParser:true, }, 
    (err) => {
        if(err) console.log(err);
        else console.log('Connected to DB...');
    });
 
// start listening the server
app.listen(3000);