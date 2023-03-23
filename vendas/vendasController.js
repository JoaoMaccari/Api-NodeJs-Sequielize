const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')


const connection = require('../database/connection');
const Venda = require('../models/vendaModel');

router.get("/vendas" ,(req, res) =>{
    Venda.findAll()
        .then(vendas => res.json(vendas))
        
        .catch(err =>{
            res.sendStatus(500);
            console.log(err);
        });    
});


//rota get game especifico
router.get('/venda/:id', (req, res)=>{
    let id= req.params.id

    if(isNaN(id)){
        res.sendStatus(400);
    }
    else{
        let {id} = req.params
        Venda.findOne({where : {id: id}})
        .then(venda =>{
            if(venda == null){
                res.sendStatus(404);
            }
            else{
                res.json(venda)
            }
        })
        .catch(err =>{
            console.log(err);
            res.sendStatus(500)
        })
    }
})

/* cria uma venda */
router.post('/venda', (req, res) =>{
    let {cliente, quantidade, produto, milheiro, recebeu, valorVenda} = req.body;
    
    console.log(req.body)
    //console.log(res)


    if(cliente == undefined || quantidade == undefined || produto == undefined || milheiro == undefined || recebeu == undefined || valorVenda == undefined){
        res.sendStatus(400)
       
    }else{

        Venda.create({
            cliente:cliente,
            quantidade: quantidade,
            produto:produto,
            milheiro: milheiro,
            recebeu:recebeu,
            valorVenda:valorVenda
        })
        .then(()=> res.sendStatus(200))

    }
})

/*  atualiza     */ 
router.put('/venda/:id', (req, res) =>{
    let {title, ano, preco} = req.body;

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }
    else{
        let {id} = req.params

        Games.findOne({where : {id:id}})
        .then((game) =>{
            if(game == null){
                res.sendStatus(404)
            }else{
                if(title != undefined){
                    Games.update({title: title}, {where:{id, id}})
                }
                if(ano != undefined){
                    Games.update({ano: ano}, {where: {id:id}})
                }
                if(preco!= undefined){
                    Games.update({preco:preco}, {where: {id:id}})
                }
                res.sendStatus(200)
            }
        })
        .catch(err =>{
            console.log(err);
            res.sendStatus(500);
        })
    }
})

router.delete('/venda/:id' , (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        let {id} = req.params

        Games.findOne({where: {id:id}})
        .then(game =>{
            if(game == null){
                res.sendStatus(404)
            }else{
                Games.destroy({where: {id:id}})
                res.sendStatus(200)
            }
            
        })
        .catch(err =>{
            console.log(err)
            res.sendStatus(500)
        })
    }
})

module.exports = router;