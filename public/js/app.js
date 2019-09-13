let locationInput = document.querySelector('#search-location')
let address = ''

const renderWeather = function(summary , temp , rainPercent){
    
    const weatherDiv = document.querySelector('.weather')
    weatherDiv.innerHTML = ''
    
    const summaryEl = document.createElement('h4')
    summaryEl.textContent = 'Weather Summary : ' + summary
    
    const tempEl = document.createElement('h4')
    tempEl.textContent = 'Temperature : ' + temp + ' Celcius'

    const rainEl = document.createElement('h4')
    rainEl.textContent = 'Rain Chance : ' + rainPercent + '%'

    weatherDiv.appendChild(summaryEl)
    weatherDiv.appendChild(tempEl)
    weatherDiv.appendChild(rainEl)    

}

locationInput.addEventListener('change',(e)=>{
    address = locationInput.value
    console.log(address)
    
    fetch('/weather?address='+address).then((response)=>{
        response.json().then((data)=>{
            renderWeather(data.summary   , data.temperature , data.rainPercent)
        })
    })

    
})


