const express = require('express')
const path = require('path')

const app = express()
const publicDir = path.join(__dirname , '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDir))

app.get('' , (req , res)=>{
    res.render('index')
})

app.listen(3000 , ()=>{
    console.log('Server Up and Running on Port 3000')
})