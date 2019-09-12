const request = require('request')
const geocode = require('./geocode')
const fetchWeather = require('./weather')

const location = 'Mumbai'

geocode(location, (error , data)=>{
    if(error !== undefined){
        console.log(error)
    } else {
        fetchWeather(data.latitude , data.longitude , (error , weather)=>{
            if(error !== undefined){
                console.log(error)
            } else {
                console.log(weather.summary)
            }
        })
    }
    
})
