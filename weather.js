const request = require('request')

const fetchWeather = (latitude , longitude , callback) => {
    const weatherURL= 'https://api.darksky.net/forecast/0453b711f5fba6baf467099cabe51601/' + latitude + ',' + longitude + '?units=si'

    request({url : weatherURL , json : true} , (error , response)=>{
        if(error){
            callback('Connection Interrupted ! Make Sure You Have a Stable Internet Connnection' , undefined)
        } else if(response.body.error){
            callback('Error ! Location Not Found. ' , undefined)
        } else {
            const data = response.body
            const temp = data.currently.temperature
            const rainPercent = data.currently.precipProbability * 100
            const summary = data.daily.data[0].summary

            callback(undefined , {
                summary : summary,
                temperature : temp,
                rainPercent : rainPercent
            })
            
        }
    })
}

module.exports = fetchWeather