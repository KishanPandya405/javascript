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
console.log(userLoginMassage());