const jwt = require('jsonwebtoken')

function authenticate(req,res,next)
{
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) res.send(err.statement)
        req.user = user
    })
    next()
}

module.exports = authenticate