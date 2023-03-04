// Primitive(call by value)

//  7 types: String,Number,Boolean,null,undefined,Symbol(unique),BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// JS is a Dynamically-typed language

// Reference (Non Primitive)

//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name:"musavir",
    age:23,
}

const myFunction = function(){
    console.log("Hello world!")
}

console.log(typeof id);


// https://262.ecma-international.org/5.1/#sec-11.4.3