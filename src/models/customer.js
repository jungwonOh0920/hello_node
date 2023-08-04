const mongoose = require('mongoose')

// define model

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    industry: String
})

module.exports = mongoose.model('customer', customerSchema)