const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    mailid: String,
    phone: Number,
    address: [{
        location: String,
        state: String
}],
    balance: Number,
    age: Number,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('userDetails',userSchema)


