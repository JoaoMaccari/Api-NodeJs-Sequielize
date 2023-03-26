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
    let {cliente, quantidade, produto, milheiro, recebeu, valorVenda} = req.body;

    console.log(req.body)

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }
    else{
        let {id} = req.params

        Venda.findOne({where : {id:id}})
        .then((venda) =>{
            if(venda == null){
                res.sendStatus(404)
            }else{
                if(cliente != undefined){
                    Venda.update({cliente: cliente}, {where:{id, id}})
                }
                if(quantidade != undefined){
                    Venda.update({quantidade: quantidade}, {where: {id:id}})
                }
                if(produto!= undefined){
                    Venda.update({produto:produto}, {where: {id:id}})
                }
                if(milheiro!= undefined){
                    Venda.update({milheiro:milheiro}, {where: {id:id}})
                }
                if(recebeu!= undefined){
                    Venda.update({recebeu:recebeu}, {where: {id:id}})
                }
                if(valorVenda!= undefined){
                    
                    Venda.update({valorVenda:valorVenda}, {where: {id:id}})
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

        Venda.findOne({where: {id:id}})
        .then(venda =>{
            if(venda == null){
                res.sendStatus(404)
            }else{
                Venda.destroy({where: {id:id}})
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