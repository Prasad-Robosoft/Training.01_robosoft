const pr = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve("inside timeout") 
        }, 2000);
    })
}


const callme = async()=>
{
    console.log("first")
    let val = await pr()
    console.log(val)
    console.log("last")
}

callme()



