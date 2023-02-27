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
            .then(()=>{
                res.status(200)
            })
        
        }else{
            res.status(400)
        }


    })

   
        
    
})


router.post('/authenticate' , (req, res) =>{
    var email = req.body.email;
    var password = req.body.password

    Users.findOne({where:{email:email}}).then(user =>{
        if(user != undefined){

            var correct = bcrypt.compareSync(password , user.password);

            jwt.sign({email: email, password: password}),jwtSecret,{expiresIn:'48h'},(err, token)=>{
                if(err){
                    res.status(400);
                    res.json({err: 'falha interna'})
                }else{
                    if(correct){
                        res.status(200);
                        res.json({token: token})
                    }
                }
            }


           
                
        }else{
            res.status(404)
            res.json({erro :"email ou senha invalidos"})
        }


       

    })


  
})


module.exports = router