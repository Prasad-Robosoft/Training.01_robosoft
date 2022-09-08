const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    mailid: String,
    phone: Number,
    address: [{
        type: String
    }],
    balance: Number
})

module.exports = mongoose.model('userDetails',userSchema)


