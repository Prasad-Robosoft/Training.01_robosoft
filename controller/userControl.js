const userModel = require('../Model/userModel')

exports.createUser = async(req,res)=>{
    try {
        const x = await userModel.create({
            userName: req.body.userName,
            mailid: req.body.mailid,
            phone: req.body.phone,
            address: req.body.address,
            balance: req.body.balance,
            age: req.body.age
        })
        res.send("Successfully added a user")
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

exports.addAddress = async(req,res)=>{
    try {
       await userModel.findOneAndUpdate({
        userName: req.body.user
       },{
           $push: {
            address: req.body.address
           }
       },{
            new: true
       })
       res.send("address added")
    } catch (error) {
        res.send(error.statement)
    }
}


exports.findUser = async(req,res)=>{
    try {
        const x = await userModel.find({
            userName: /^sandesh/
        })
        res.send(x)
    } catch (error) {
        res.send(error.statement)
    }
}

exports.filterUser = async(req,res)=>{
    try {
        const filter = await userModel.find({
            age:{
                $gt : 18,
                $lt: 60
            } 
        })
        res.send(filter)
    } catch (error) {
        res.send(error.statement)
    }
}



