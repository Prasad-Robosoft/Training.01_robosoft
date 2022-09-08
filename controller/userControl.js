const userModel = require('../Model/userModel')

exports.createUser = async(req,res)=>{
    try {
        await userModel.create({
            userName: req.body.userName,
            mailid: req.body.mailid,
            phone: req.body.phone,
            address: req.body.address,
            balance: req.body.balance
        })
        res.send("User added to database")
    } catch (error) {
        res.send(error.message)
    }
}

exports.incrementBalance = async(req,res)=>{
    try {
        await userModel.findOneAndUpdate({
            userName: req.body.user
        },{
            $inc: {
                balance : 2000
            }
        },{
            new: true
        })
        res.send("amount credited")
    } catch (error) {
        res.send(error.send)
    }
}