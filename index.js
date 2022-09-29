const express = require('express')
const app = express()
const helmet = require('helmet')
const middle = require('./middleware/sampleFun')
const auth = require('./middleware/jwtAuth')
const router = require('./router')
const mongoose = require('mongoose')
const rateLimiter = require('express-rate-limit')
//const expressUpload = require('express-fileupload')
const multer = require('multer')
require('dotenv').config()

const limiter = rateLimiter({
        max : 5,
        windowMs: 10000    //10 secs
})

const fileStorage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,"./uploads")
        },
        filename: (req,file,cb)=>{
            cb(null,Date.now() + "--" + file.originalname)
        } 
    })

// app.use(expressUpload({
//         useTempFiles: true,
//         tempFileDir: "/temp/"
// }))

const uploadProfile = multer({storage: fileStorage}).single('profilePic')
app.use('/upload',uploadProfile)
app.use(express.json())
app.use(helmet())
app.use('/learnDates',middle)
app.use(limiter)
//app.use('/home',auth)
app.use(router)


port = process.env.PORT

app.listen(port,()=>{
        console.log(`listening to the port ${port}`)
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connencted to db')
}
) 

module.exports = app
