function sample(req,res,next)
{
    console.log("message from middleware")
    next()
}

module.exports = sample