const request = require('postman-request')

const geolocation = (address, callback) => {
    // const url = 'https://api.openweathermap.org/geo/1.0/direct?q=' +encodeURIComponent(address)+ '&appid=58e09b1bf93d7c643f36e000603fd057'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' +encodeURIComponent(address)+ '&appid=58e09b1bf93d7c643f36e000603fd057'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Check your connection and try again',undefined)
        }
        else if(response.body.error){
            callback('check the url and try accessing again', undefined)
        }
        else{
            callback(undefined, {
                lattitude: response.body.coord.lat,
                longitude: response.body.coord.lon
            })
        }
    })
}

module.exports = geolocation;