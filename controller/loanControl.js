const loanModel = require('../Model/loanModel')

exports.createLoan = async(req,res)=>{
    try {
        await loanModel.create({
            user_id: req.body.user_id,
            userName: req.body.userName,
            loanAmount: req.body.loanAmount
        })
        res.send("loan created")
    } catch (error) {
        res.send(error.statement)
    }
}

exports.findUserLoan = async(req,res)=>{
    try {
        const found = await loanModel.findOne({
            userName: req.body.userName
        }).populate("user_id",{
            userName: 1
        })
        res.send(found)
    } catch (error) {
        res.send(error.statement)
    }
}