const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Customer = require('./models/customer')

dotenv.config()
const app = express()
mongoose.set('strictQuery', false)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 3000
const CONNECTION = process.env.CONNECTION

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

const customer = new Customer({
    name: 'Emily',
    industry: 'Designer'
})

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/api/customers', async (req, res) => {
    try {
        const result = await Customer.find()
        res.json({"customers: ": result})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
})

app.post('/', (req, res) => {
    res.send('<h1>post method!</h1>')
})

app.post('/api/customers', (req, res) => {
    console.log('check: ', req.body)
    res.send(req.body)
})

const start = async () => {
    try {
        await mongoose.connect(CONNECTION);

        app.listen(PORT, (req, res) => {
            console.log('app listening on PORT ' + PORT);
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()