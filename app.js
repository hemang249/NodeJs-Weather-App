const request = require('request')

const url = 'https://api.darksky.net/forecast/0453b711f5fba6baf467099cabe51601/37.8267,-122.4233?units=si'
request({url : url , json : true} , (error , response)=>{
    const data = response.body
    const temp = data.currently.temperature
    const rainPercent = data.currently.precipProbability * 100
    

    console.log(`${data.daily.data[0].summary} Currently it is ${temp} Celsius with a ${rainPercent} % Chance of Rain`)
})