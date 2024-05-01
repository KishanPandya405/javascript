function userName(){
    console.log("k");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}

//userName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}
addTwoNumbers(4, 9)


function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
    //let result = number1 + number2
    //return result
    return  number1 + number2
}

const result = addTwoNumbers(4, 9)
//console.log("Result:", result);

function userLoginMassage(username){
    if (!username) {     //if (username === undifined)
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

//console.log(userLoginMassage("kishan"));
//console.log(userLoginMassage());

function calculatCartPrice (val1, val2, ...num1){  //... rest/spread operator
    return num1
}

console.log(calculatCartPrice(200, 400, 500, 2000));

const user = {
    username : "kishanpandya405@gmail.com",
    age : 25
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
//handleObject(user)

handleObject({
    username : "kp@g.com",
    age : 24
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));