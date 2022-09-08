const { connect } = require("mongoose")
const adminModel = require('../Model/adminModel')

exports.saywelcome = (req,res)=>{
    res.send('first day at robosoft')
}


exports.calculate = (req,res)=>{          //calculator
    const sign = req.body.sign
    const a = req.body.a
    const b = req.body.b

    switch(sign){
        case '+': res.json({
            "result" : a + b 
        })
        break
        case '-': res.json({
            "result" : a - b 
        })
        break
        case '*': res.json({
            "result" : a * b 
        })
        break
        case '/': res.json({
            "result" : a / b 
        })
        break
    }
}

exports.findGreatest = (req,res)=>{   //operators
    let num1 = req.body.num1
    let num2 = req.body.num2
    let num3 = req.body.num3
   answer = (num1>num2 && num1>num3)? number1: (num2>num3 && num2>num1)? num2:num3
   res.json({
    "greatest number" : answer
   })

}

exports.seniorCitizen = (req,res)=>{   //filter
   try {
        let ages = []
        ages = req.body.ages
        const result = ages.filter(checkSenior)
        function checkSenior(age)
        {
            return age>=60
        }
  
        res.json({
            "senior citizens are of age" : result
        })
   } catch (error) {
        res.status(404).send(err.message)
   }
}


exports.frameSentence = (req,res)=>{                 //this and objects
    place = req.body.place
    climate = req.body.climate
    console.log(place)

    const sentence = {
        location : place,
        condition: climate,
        info: function(){
            res.send(`${this.location} is very ${this.condition}`)
        }
    }

   sentence.info()
}



exports.cgpaToPercent = (req,res)=>{   //map
   try {
        cgpa = req.body.cgpa
    
        function calculate(n)
        {
            return (n-0.75)*10
        }
        let new_arr = cgpa.map(calculate)
        
        res.json({
            "percentages are" : new_arr
        })  
   } catch (err) {
    res.status(400).send(err.message)
   }
}


exports.learnStrict = (req,res)=>{
    
    "use strict"    
//if not declared with let or var it gives error
//cannot delete variable or function and any undeletable property
    const x = 10
    res.json({
        "value is" : x
    })
}


exports.learnLopp = (req,res)=>{  //different kinds of loops
    const num = req.body.num
    const times = req.body.times
    const type = req.body.type
    numArray = req.body.newArray
    let arr= [],j=0

    switch(type){
        case "normal": for(let i=0;i<times;i++)
                        {
                            arr[i] = num
                        }    
                        res.json({
                        "array elements are " : arr,
                        })
                        break
        case "of": for(a of numArray)
                    {
                        arr[j] = a
                        j++
                    }
                    res.json({
                        "array elements when used of" : arr
                    })
                    break
        case "forEach": numArray.forEach(element => {
            arr[j] = element
            j++
        });
        res.json({
            "array when used forEach": arr
        })
    }
}


exports.learnDates = (req,res)=>{     //different dates


    
    const date = new Date()  
    const d = new Date(Date.now() + 45000000)
    
    res.json({
        "date is" : date.toDateString(),
        "gmt is": date.toUTCString(),
        "time is" : date.toTimeString(),
        "Time in califonia" : d.toLocaleTimeString()
    })
}


exports.regExp = (req,res)=>{            //password checker
    password = req.body
    
    try {

        if(password.length >=12)
        {
            regx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

            if(regx.test(password))
            {
                res.send('Great! its a strong password')
            }else{
                res.send('not a great password')
            }
        }else{
            res.status(400).send('length should be grater than or equal to 12')
        }
        
    } catch (err) {
        res.send(err.message)
    }
   
}

exports.spreadRest = (req,res)=>{           //Rest and spread
    let arr1 = req.body.arr1

    function add(...arr)
    {
        let sum = 0
        for(a of arr)
        {
            sum = a + sum
        }

        res.json({
            "sum" : sum
        })

        
    }

    add(...arr1)
}


exports.createAdmin = async(req,res)=>{
    try {
            const createAdmin = await adminModel.create({
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
        await adminModel.updateOne({
            adminName: req.body.name
        })
    } catch (error) {
        res.send(err.message)
    }
}





