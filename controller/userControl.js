const { default: mongoose } = require('mongoose')
const userModel = require('../Model/userModel')
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.createUser = async(req,res)=>{
    try {
        const x = await userModel.create({
            userName: req.body.userName,
            mailid: req.body.mailid,
            phone: req.body.phone,
            address: req.body.address,
            balance: req.body.balance,
            age: req.body.age,
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
       const x= await userModel.findOneAndUpdate({
        userName: req.body.user
       },{
           $push: {
            address: req.body.address
           }
       },{
            new: true
       })
       console.log(x)
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

// exports.filterUser = async(req,res)=>{
//     try {
//         const filter = await userModel.find({
//             age:{
//                 $gt : 18,
//                 $lt: 60
//             } 
//         })
//         res.send(filter)
//     } catch (error) {
//         res.send(error.statement)
//     }
// }



exports.filterUser = async(req,res)=>{
    try {
        const filter = await userModel.find({
            age: {
                $nin : 10
            }
        }).limit(1)                                         //limits response to only one user
        res.send(filter)
    } catch (error) {
        res.send(error.statement)
    }
}

exports.compareDate = async(req,res)=>{
    try {
        const findDate = await userModel.find({
            userName: req.body.name
        })
        res.send(findDate.date)
    } catch (error) {
        res.send(error.statement)
    }
}


exports.updateAddress = async(req,res)=>{
    try {
        const obj_id = req.body.obj_id
        
       const res = await userModel.updateOne({
        "address._id": "6321b5f7c0117f102f431111"
       },{
        $set: {
            "address.$.state" : "India"
        }
       })
       console.log(res)
       res.send(res)
    } catch (error) {
        res.send(error.statement)
    }
}

exports.learnAggrigate = async(req,res)=>{
    try {
        const obj_id = "631effb7fb2bc4680cbccead"
            var pipeline = [{
                $match: {
                    userName: req.body.userName
                }
        },{
            $unwind: {
                path: "$address"
            }
        },{
            $match: {
                "address._id": mongoose.Types.ObjectId(req.body.obj_id)
            },

        },{
            $set: {
                address: req.body.address 
            }
        }]
    
         const x = await userModel.aggregate(pipeline)

        res.send(x)
        
    } catch (error) {
        res.send(error.statement)
    }
}

exports.deleteAddress = async(req,res)=>{
    try {
        const obj_id = req.body.obj_id
        await userModel.updateOne({
            _id: "631b0c7101c845271f162a00"
        },{
            $pull: {
                address: {
                    location: "Malpe, Manipal",
                    state: "Karnataka"
                }
            }
        })
        res.send("deleted")
    } catch (error) {
        res.send(error.statement)
    }
}

exports.login = async(req,res)=>{
    userName = req.body.user
    user = {name: userName}
    const access_token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.send(access_token)
}

exports.upload = async(req,res)=>{
    console.log(req.file.path)
    res.send("uploaded")
}


exports.home= async(req,res,next)=>{
    res.send(req.user)
    next()
}