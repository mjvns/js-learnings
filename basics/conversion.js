let marks = 45
console.log(typeof marks) //number

let marks2 = "37ABC"
let convertedmarks = Number(marks2)
console.log(convertedmarks) //NaN
console.log(typeof convertedmarks) //number

let isfail = true
let isfailnum = Number(isfail)
console.log(isfailnum) // 1
isfail = !isfail
isfailnum = Number(isfail)
console.log(isfailnum) // 0

let x = null
console.log(x)
console.log(typeof x) // object
console.log(Number(x)) // 0

let y = ""
console.log(Number(y)) //0
console.log(Boolean(y)) //false

let z = NaN
console.log(z) //NaN
console.log(typeof z) // number
console.log(Boolean(z)) //false

let a = undefined
console.log(a)//undefined
console.log(typeof a) //undefined
console.log(Boolean(a)) //false