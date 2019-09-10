const request = require('request')

const geocode = (address , callback) => {
    const geolocationURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaGVtYW5nMjQ5IiwiYSI6ImNrMGNsdmVqaTAzMHgzaG8xZWhudGhrancifQ.Dl0u8ML51OUxluA_ys41hQ'
    request({url : geolocationURL , json : true} , (error , response)=>{
        if(error){ 
            callback('Unable To Connect To Location Services' , undefined)
        } else if(response.body.message){
            callback('Unable to Find The Location' , undefined)
        } else {
            const data  = response.body 
            const placeName = data.features[0].place_name
            const latitude = data.features[0].geometry.coordinates[0]
            const longitude = data.features[0].geometry.coordinates[1]
            callback(undefined , {placeName : placeName ,  latitude : latitude , longitude : longitude})
          
        }
    })
}

module.exports = geocode