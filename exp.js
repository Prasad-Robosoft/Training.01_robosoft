function call(...a)
{
    let sum = 0
    a.forEach(ele=>{
        sum = sum + ele
    })

    return sum
}

const x = call(2,3)

console.log(x)




arr = [1,2]

function spread(a,b)
{
    console.log(a+b)
}

spread(...arr)