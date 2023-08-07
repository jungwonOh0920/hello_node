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
        'industry': 'soccer player'
    },
    {
        'name': 'Craig',
        'industry': 'business owner'
    },
    {
        'name': 'Phil',
        'industry': 'realtor'
    }
]

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

app.get('/api/customers/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        console.log(customer)
        if (!customer) {
            res.status(404).json({error: 'user not found'})
        } else {
            res.json({customer})
        }
    } catch (e) {
        res.status(500).json({error: 'something went wrong'})
    }
})

app.put('/api/customers/:id', async (req, res) => {
    try {
        const customerId = req.params.id
        const result = await Customer.replaceOne({_id: customerId}, req.body)
        console.log('res: ', result)
        res.json({updatedCount: result.modifiedCount})
    } catch (e) {
        res.status(500).json({error: 'something went wrong :('})
    }
})

app.post('/', (req, res) => {
    res.send('<h1>post method!</h1>')
})

app.post('/api/customers', async (req, res) => {
    console.log('check: ', req.body)
    const customer = new Customer(req.body)
    try {
        // await customer.save()
        res.status(201).json({customer})
    } catch (e) {
        res.status(400).send({error: e.message})
    }
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