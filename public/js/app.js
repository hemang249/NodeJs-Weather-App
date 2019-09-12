let locationInput = document.querySelector('#search-location')
let address = ''

locationInput.addEventListener('change',(e)=>{
    address = locationInput.value
    console.log(address)
    
    fetch('/weather?address='+address).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
        })
    })
})


