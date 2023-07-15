const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
mongoose.set('strictQuery', false)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION
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


const start = async () => {
    try {
        await mongoose.connect(CONNECTION)

        app.listen(PORT, () => {
            console.log('app listening on port ' + PORT);
        })
    } catch (error) {
        console.error('err: ', error.message)
    }
}

start()