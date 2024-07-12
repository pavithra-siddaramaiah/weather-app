const express = require('express')

console.log(__dirname)
console.log(__filename)

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express!!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('<h1>Find more details here</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: {
            latitude: 54.876,
            longitude: -23.34
        },
        location: "Ney York"
    })
})


app.listen(3000, () => {
    console.log('server is running on port 3000')
})
//app.com
//app.com/help
//app.com/about