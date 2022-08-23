const fs = require('fs')

let data = "this is my file and I ma writing there"


fs.writeFile('output.txt',data,(err)=>{
    if(err) throw err
})

fs.readFile('output.txt','utf-8',(err,data)=>{
    console.log(data)
})

