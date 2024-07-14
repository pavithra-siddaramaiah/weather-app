const express = require('express')
const path = require('path')
const hbs = require('hbs');
const { DESTRUCTION } = require('dns');

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
    res.send({
        lattitude: 123,
        longitude: 456
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