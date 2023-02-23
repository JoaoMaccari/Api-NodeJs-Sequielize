const express = require('express')
const app = express()


const connection = require('./database/connection')


//Config
app.use(express.urlencoded({extended: true}))
app.use(express.json());



app.get('/', (req, res) =>{
    res.send('okk')
});

app.listen(8080 , () =>{
    console.log('server aberto')
})

