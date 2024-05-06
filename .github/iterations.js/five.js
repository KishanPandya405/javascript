const codding = ["js", "py", "java", "node"]

// codding.forEach(function(val) {
//     console.log(val);
// })

// codding.forEach( (val) => {
//     console.log(val);
// })      //  arrow function method

// function printme(val) {
//     console.log(val);
// }

// codding.forEach(printme)

// codding.forEach( (val, index, arr)=> {
//     console.log(val, index, arr);
// })

const mycodding = [
    {
        lanName: "js",
        fullName : "java script"
    },
    {
        lanName: "py",
        fullName : "python"
    },
    {
        lanName: "java",
        fullName : "java"
    }
]

mycodding.forEach( (val) => {
    console.log(val.fullName);
})