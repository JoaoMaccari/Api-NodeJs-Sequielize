const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const jwtSecret = 'segredo'

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

    Users.findOne({where: {email:email} }).then(user =>{


        if(user == undefined){

            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt)
            
            Users.create({
                email: email,
                password: hash
            })
            .then(user =>{

                let token = jwt.sign({user:user}, jwtSecret,{expiresIn:'48h'});
                
                res.json({
                    user:user,
                    token: token
                })
            }).catch(err =>{
                res.status(500).json(err)
            })
        
        }else{
            res.status(400)
        }


    })   
    
})


router.post('/auth' , (req, res) =>{
    let {email, password} = req.body;

    Users.findOne({
        where: {
            email:email
        }
    }).then(user =>{

        if(!user){
            res.status(404).json({msg: "usuario nao encontrado"})
        }else{
            
            if(bcrypt.compareSync(password, user.password)){
                
                let token = jwt.sign({user:user}, jwtSecret,{expiresIn:'48h'});

                res.json({
                    user:user,
                    token: token
                })
                 
            }else{
                res.status(401).json({msg: "senha incorreta"})
            }
            

        }
    }).catch(err =>{
        res.status(500).json(err)
    })


  
})


module.exports = router