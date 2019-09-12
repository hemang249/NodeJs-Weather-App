const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./geocode')
const fetchWeather = require('./weather')

// Initialize Express JS
const app = express()

// Paths For Express JS
const publicDir = path.join(__dirname , '../public')
const viewsDir = path.join(__dirname ,'../Templates/views')
const partialsDir = path.join(__dirname , '../Templates/partials')

// Setup HandleBars
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

// Serving Public Dir
app.use(express.static(publicDir))

app.get('' , (req , res)=>{
    res.render('index')
})

// HTTP Endpoint
app.get('/weather', (req , res)=>{
    if(!req.query.address){
        res.send({
            error: 'No Location Provided, Please Provide a Valid Location'
        })
    } else{
        geocode(req.query.address , (error , data)=>{
            if(error){
                res.send(error)
            } else{
                fetchWeather(data.latitude , data.longitude , (error , response)=>{
                    if(error){
                        res.send(error)
                    } else {
                        res.send(response)
                    }

                })
            }
        })
    }
})

app.get('*' , (req , res)=>{
    res.send('Error 404 ! Page Not Found  ')
})

app.listen(3000 , ()=>{
    console.log('Server Up and Running on Port 3000')
})