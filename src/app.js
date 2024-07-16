const express = require('express')
const path = require('path')
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();

//Defining the paths for express config
publicDirectory = path.join(__dirname, '../public')
viewPath = path.join(__dirname,'../templates/views')
partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        details: "abc"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help Page',
        details: 'Click here for more help'
    })
})

app.get('/about', (req, res) => {
res.render('about', {
    title: 'About Page',
    details: 'Find more details about me'
})
})

app.get('/weather', (req, res) => {
    address = req.query.address
    if(!address){
        return res.send({
            error: 'Please provide the valid address inorder to look into the forecast'
        })

    } 
    
    geocode(address, (error, {lattitude, longitude}= {}) => {
        if (error) {
            return res.send({
                error
            })
        }

        forecast(lattitude,longitude, (error, {city, country}) => {
            if (error) {
                return res.send({
                    error
                })
            }

            res.send({
                location: 'Lattide for '+address+' is '+lattitude+' and Longitude is '+longitude,
                details: 'Country is '+country+' and the city is '+city
            })
           
        })
        
        
    })
    
    
    
})

app.get('/products', (req, res) => {
    console.log(req.query.search)
    if(!req.query.search){
         return res.send({
            error: 'No search available for this request'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title: '404',
        errorMessage: 'This page is not defined',
        details: 'Go Back Home'
    })
})

app.get('/*', (req, res) => {
    res.render('404',{
        title: '404',
        errorMessage: 'Page not found',
        details: 'Go Back Home'
    })
})

app.listen(3000, () => {
    console.log('server running on port 3000')
})