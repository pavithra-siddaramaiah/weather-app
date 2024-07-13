const express = require('express')
const path = require('path')

const app = express();
publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
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