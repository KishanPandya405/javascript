// singleton
// object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"kishan",
    [mySym] : "mykey1",       // find symbol interview question
    age: "25",
    location : "gandhinagar",
    email: "kishan@gmail.com",
    isLoggedIn : true,
    lastLoginDays :["monday", "saturday"]
}

//console.log(jsUser["email"]);
//console.log(jsUser["name"]);
//console.log(jsUser);

jsUser.email="kishanap@gmail.com"
//Object.freeze(jsUser)
jsUser.email= "kp@gmail.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js users");
}

jsUser.greetingtwo = function(){
    console.log(`hello js users, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());