const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 3000;

const customers = [
    {
        "name": "Jay",
        "industry": "Soccer"
    },
    {
        "name": "Jessie",
        "industry": "medical"
    },
    {
        "name": "Bob",
        "industry": "Business"
    }
]


app.get('/api/customers', (req, res) => {
    res.send({"customers: ": customers})
})

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.post('/api/customers', (req, res) => {
    console.log('req.body: ', req.body)
    res.send(req.body)
})

app.post('/', (req, res) => {
    res.send('this is a post request')
})

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT);
})