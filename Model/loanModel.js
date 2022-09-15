const mongoose = require('mongoose')

const loanSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userDetails"
    },
    userName: String,
    loanAmount: Number,
})

module.exports = mongoose.model('loanDetails',loanSchema)