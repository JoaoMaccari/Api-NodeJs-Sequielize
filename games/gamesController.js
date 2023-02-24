const express = require ('express');
const router = express.Router();


const connection = require('../database/connection');
const Games = require('../models/GameModel');

router.get("/games", (req, res) =>{
    Games.findAll()
        .then(games => res.json(games))
        .catch(err =>{
            res.sendStatus(500);
            console.log(err);
        });    
});


//rota get game especifico
router.get('/game/:id', (req, res)=>{
    let id= req.params.id

    if(isNaN(id)){
        res.sendStatus(400);
    }
    else{
        let {id} = req.params
        Games.findOne({where : {id: id}})
        .then(game =>{
            if(game == null){
                res.sendStatus(404);
            }
            else{
                res.json(game)
            }
        })
        .catch(err =>{
            console.log(err);
            res.sendStatus(500)
        })
    }
})


router.post('/game', (req, res) =>{
    let {title, ano, preco} = req.body;

    if(title == undefined || ano == undefined || preco == undefined){
        res.sendStatus(400)
    }else{
        Games.create({
            title:title,
            ano:ano,
            preco:preco
        })
        .then(()=> res.sendStatus(200))
    }
})

router.put('/game/:id', (req, res) =>{
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

router.delete('/game/:id' , (req, res) =>{
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