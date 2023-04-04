const express = require('express');
const app = express();
const connection = require('./database/connection');
const cors = require('cors');


app.use(cors())

//Config
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routers
const vendasController = require('./vendas/vendasController');
const usersController = require('./user/userController');
const despesaController = require('./despesas/despesasController');

//models
const Venda = require('./models/vendaModel');
const Despesa = require('./models/despesaModel');

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


//rotas vendas
app.use('/', vendasController);
app.use('/', usersController);
app.use('/', despesaController);



app.get('/', (req, res) =>{
    res.send('okk');
});





app.listen(8080 , () =>{
    console.log('server aberto');
})

