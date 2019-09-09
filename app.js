const request = require('request')

const weatherURL= 'https://api.darksky.net/forecast/0453b711f5fba6baf467099cabe51601/37.8267,-122.4233?units=si'
const location = 'Vadodara'
const geolocationURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ location +'.json?access_token=pk.eyJ1IjoiaGVtYW5nMjQ5IiwiYSI6ImNrMGNsdmVqaTAzMHgzaG8xZWhudGhrancifQ.Dl0u8ML51OUxluA_ys41hQ'

request({url : geolocationURL , json : true} , (error , response)=>{
    
    if(error){ 
        console.log('Connection Interrupted! Make Sure you have a stable internet Connection')
    } else if(response.body.message){
        console.log('Error ! Location Not Found')
    } else {
        const data  = response.body 
        const placeName = data.features[0].place_name
        const latitude = data.features[0].geometry.coordinates[0]
        const longitude = data.features[0].geometry.coordinates[1]
        console.log(`${placeName} located at coordinates ${latitude} , ${longitude}`)
    }
    
})

request({url : weatherURL , json : true} , (error , response)=>{
    if(error){
        console.log('Connection Interrupted! Make Sure you have a stable internet Connection')
    } else if(response.body.error){
        console.log('Error ! Location Not Found !')
    } else {
        const data = response.body
        const temp = data.currently.temperature
        const rainPercent = data.currently.precipProbability * 100
        console.log(`${data.daily.data[0].summary} Currently it is ${temp} Celsius with a ${rainPercent} % Chance of Rain`)
    }   
})
