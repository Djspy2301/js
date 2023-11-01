//  Primitive

//  7 types : String->typeOf:string, Number->typeOf:number, Boolearn->typeOf:boolean, null->typeOf:object, undefined->typeOf:undefined, Symbol->typeOf:symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log("symbol type:",typeof id)

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array->typeOf:object, Objects->typeOf:function, Functions->typeOf:function object

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3