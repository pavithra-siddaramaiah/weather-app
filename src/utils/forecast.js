const request = require('postman-request')

const forecast =  (lattitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lattitude+'&lon='+longitude+'&appid=58e09b1bf93d7c643f36e000603fd057&units=imperial'
    request({url,json:true}, (error, response) => {
        if(error){
            callback('Check your connection and try again', undefined)
        }
        else if(response.body.length === 0){
            callback('Make sure that you are using the right url', undefined)
        }
        else{
            callback(undefined, {
                city : response.body.name,
                country: response.body.sys.country

            })
        }
    })
}



module.exports = forecast;