const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>hello express!</h1>')
})

app.post('/', (req, res) => {
    res.send('<h1>post method!</h1>')
})

app.listen(PORT, (req, res) => {
    console.log('app listening on PORT ' + PORT);
})