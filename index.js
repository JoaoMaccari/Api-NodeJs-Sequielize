const express = require('express');
const app = express();
const connection = require('./database/connection');
const cors = require('cors');

app.use(cors())

//Config
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routers
const gamesController = require('./games/gamesController');

//models
const Game = require('./models/GameModel');

//view engine
app.set('view engine', 'ejs');
//static
app.use(express('public'));


//conexão banco
connection
    .authenticate()
    .then(() =>{
        console.log('servidor conectado');
    }).catch(err =>{
        console.log(err)
});


//rotas games
app.use('/', gamesController);



app.get('/', (req, res) =>{
    res.send('okk');
});





app.listen(8080 , () =>{
    console.log('server aberto');
})

