const user ={
    username : "kp@gmail.com",
    price : 900,

    welcomeMassage : function (){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }
}
//user.welcomeMassage()
//user.username = "kishan"
//user.welcomeMassage()

//console.log(this);

//const kp = function(){
    let username = "kishan"
    //console.log(this.username);
//}

//kp()

const kp = () => {
    let username = "kishan"
    console.log(this.username);
}
kp()

//const addTwo = (num1, num2) => {
    //return num1 + num2     //explesit return
//}

//const addTwo = (num1, num2) =>  num1 + num2
//const addTwo = (num1, num2) => (num1 + num2) // impleset return
const addTwo = (num1, num2) => ({username : "ap"})

console.log(addTwo(10, 20));
