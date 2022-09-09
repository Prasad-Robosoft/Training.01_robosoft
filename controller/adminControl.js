const adminModel = require('../Model/adminModel')

exports.createAdmin = async(req,res)=>{
    try {
            await adminModel.create({
                adminName: req.body.adminName,
                password: req.body.password
            })
            res.send("admin created")
    } catch (error) {
        res.send(error.message)
    }
}

exports.updatePassword = async(req,res)=>{
    try {
        await adminModel.findOne({
            adminName: req.body.name
        }).updateOne({
            password : req.body.password
        })
        res.send("updated password")
    } catch (error) {
        res.send(error.message)
    }
}

exports.updateManyPassword = async(req,res)=>{
    try {
        await adminModel.findOne({
            adminName: req.body.name
        }).updateMany({
            password : req.body.password
        })
        res.send("Many updated password")
    } catch (error) {
        res.send(error.message)
    }
}

exports.insertManyAdmin = async(req,res) =>{
    try {
        await adminModel.insertMany(req.body)
        res.send("inserted")
    } catch (error) {
        res.send(error.message)
    }
}

exports.findReplace = async(req,res) =>{
    try {
         await adminModel.findOneAndReplace({
            adminName : req.body.name
        },{
            password: req.body.password,
            adminName: req.body.replace
        })
        res.send("found and replaced")
    } catch (error) {
        res.send(error.message)
    }
}

exports.deleteOne = async(req,res)=>{
    try {
        await adminModel.findOne({
            adminName : req.body.name
        }).deleteOne({
            adminName : req.body.name      
        })
        res.send("deleted one admin")
    } catch (error) {
        res.send(error.message)
    }
}

