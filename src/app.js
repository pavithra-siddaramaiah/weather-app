const express = require('express')
const path = require('path')
const hbs = require('hbs')

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
        author: "abc"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help Page'
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

app.listen(3000, () => {
    console.log('server running on port 3000')
})