const express = require('express');
const router = express.Router();

const connection = require('../database/connection');
const Users = require('../models/UserModel');

router.get('/users' , (req, res) =>{
    Users.findAll()
    .then(users => res.json(users))
    .catch(err =>{
        res.sendStatus(500)
        console.log(err)
    }) 
});

router.post('/create', (req, res) =>{
    let {email, password} = req.body;

    if(email == undefined || password == undefined){
        res.sendStatus(400);
    }else{
        Users.create({
            email: email,
            password: password
        })
        .then(res.sendStatus(200));
    }
})


router.post('/authenticate' , (req, res) =>{
    var email = req.body.email;
    var password = req.body.password

    Users.findOne({where:{email:email, password:password}}).then(user =>{
        if(user){

            res.status(200);
            res.json({token: 'token falso'})
                
        }else{
            res.status(404)
            res.json({erro :"email invalido ou senha invalidos"})
        }


       

    })


  
})


module.exports = router