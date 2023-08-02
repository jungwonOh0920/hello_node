const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 3000

const customers = [
    {
        'name': 'John',
        'profession': 'soccer player'
    },
    {
        'name': 'Craig',
        'profession': 'business owner'
    },
    {
        'name': 'Phil',
        'profession': 'realtor'
    }
]

app.get('/', (req, res) => {
    res.send('<h1>hello express!</h1>')
})

app.get('/api/customers', (req, res) => {
    res.send({"customers: ": customers})
})

app.post('/', (req, res) => {
    res.send('<h1>post method!</h1>')
})

app.post('/api/customers', (req, res) => {
    console.log('check: ', req.body)
    res.send(req.body)
})

app.listen(PORT, (req, res) => {
    console.log('app listening on PORT ' + PORT);
})