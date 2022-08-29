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
/*

const server = require('http').createServer(app)

const io = require('socket.io')(server)


io.on('connection',(socket)=>{
    console.log(`user connected ${socket.id}`)

    socket.on('chat',(payload)=>{
        console.log(payload)
    })
})

server.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

*/