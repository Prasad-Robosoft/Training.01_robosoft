const e = require("express")

num =10000000

function useTime(y)
{
    y()
    easy()
}

function easy()
{
    console.log('inside this')
}


useTime(()=>{
    setTimeout(() => {
        console.log('after 2 secs')
    }, 0);
})

