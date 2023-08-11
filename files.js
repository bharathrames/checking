const fs = require("fs")
const os = require("os")
const { parse } = require("path")
const [ , , arg1, arg2, op] = process.argv

const calculator = (num1, num2, operation)=>{
    switch (operation){
        case "add" :
            return +num1+ +num2
        case "sub" :
            return num1-num2
        case "mul" :
            return num1*num2
        case "div" :
            return num1/num2
        default :
             return "please enter correct value"
   }
}
// const res = calculator(arg1, arg2, op)
// console.log(res)

fs.readFile("./config.json", "utf-8", (err, data)=>{
    if (err){
        console.log("error:", err)
    }else{
        const config = JSON.parse(data)
        console.log(config)
         const res = calculator(config.num1, config.num2, config.operation)
          console.log(res)
    }
})

console.log("os-versiion", os.version())
console.log(os.totalmem())
console.log(os.freemem())