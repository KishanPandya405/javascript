// primitive

// 7 types : string, number, boolean, null, unefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

// Reference (non Primitive)

// Array, Object, Function

const hero = ["shree ram","bajarangbali","shree krishna"];

let myobj = {
    name : "kihsan",
    age : 25,
}

const myFunction = function (){
    console.log("hello world");
}

console.log(typeof hero);