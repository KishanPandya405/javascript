
const userEmail = []

if (userEmail) {
    console.log("successfully approved");
}else{
    console.log("not approved");
}

// falsey values

// false, 0, -0, null, undifine, BigInt, BigInt 0n, NaN, ""

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is Empty");
}

// Nullish Coalescing Operator (??) : null Undifined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 15
//val1 = undefined ?? 12
//val1 = null ?? 10 ?? 15
console.log(val1);

// terniary operators

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");