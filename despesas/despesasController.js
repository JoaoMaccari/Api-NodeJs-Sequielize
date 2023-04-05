const express = require('express');
const router = express.Router();

const connection = require('../database/connection');

const Despesa = require('../models/despesaModel');


router.get("/despesas" ,(req, res) =>{
    Venda.findAll()
        .then(despesas => res.json(despesas))
        
        .catch(err =>{
            res.sendStatus(500);
            console.log(err);
        });    
});

router.get('/despesa/:id', (req, res)=>{
    let id= req.params.id

    if(isNaN(id)){
        res.sendStatus(400);
    }
    else{
        let {id} = req.params
        Despesa.findOne({where : {id: id}})
        .then(despesa =>{
            if(despesa == null){
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



router.post('/despesa', (req, res) =>{
    let {quantidadeDespesa, produto, valor} = req.body;
    
    console.log(req.body)
    //console.log(res)


    // if(cliente == undefined || quantidade == undefined || produto == undefined || milheiro == undefined || recebeu == undefined || valorVenda == undefined){
    //     res.sendStatus(400)
       
    // }else{

    //     Venda.create({
    //         cliente:cliente,
    //         quantidade: quantidade,
    //         produto:produto,
    //         milheiro: milheiro,
    //         recebeu:recebeu,
    //         valorVenda:valorVenda
    //     })
    //     .then(()=> res.sendStatus(200))

    // }
})


module.exports = router;