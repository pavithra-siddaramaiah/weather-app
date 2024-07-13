const express = require('express')
const path = require('path')


const app = express();

publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))



// app.get('/help', (req, res) => {
//     res.send('help')
// })

// app.get('/about', (req, res) => {
// res.send('about')
// })

app.get('/weather', (req, res) => {
    res.send({
        lattitude: 123,
        longitude: 456
    })
})

app.listen(3000, () => {
    console.log('server running on port 3000')
})