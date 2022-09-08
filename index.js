const express = require('express')

const app = express()

const helmet = require('helmet')

app.use(express.json())

router = require('./router')

const mongoose = require('mongoose')

require('dotenv').config()

app.use(helmet())

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
