const { default: mongoose } = require('mongoose')
const userModel = require('../Model/userModel')

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
        })
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
        const id = req.body.id
        const obj_id = req.body.obj_id
        
       const res = await userModel.updateOne({
        "address._id": "631effb7fb2bc4680cbccead"
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
                $eq: {
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

