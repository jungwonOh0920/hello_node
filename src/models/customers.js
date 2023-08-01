const mongoose = require('mongoose')

// define model

const customerSchema = new mongoose.Schema({
    name: String,
    industry: String
})

module.exports = mongoose.model('Clients', customerSchema)