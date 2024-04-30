//const tinderUser = new Object() // singelten object
const tinderUser = {} // non singleten object

tinderUser.name = "kp"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularuser = {
    email:"kp@gmail.com",
    userfullname : {
        username:{ 
            firstname : "kishan",
            lastname : "pandya"                
        }   
    }
}

//console.log(regularuser.userfullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = Object.assign({}, obj1, obj2, obj4)
//console.log(obj3);

const users = [
    {
        email : "kp@g.com",
        id :  1
    },
    {
        email : "kp@g.com",
        id :  1
    },
    {
        email : "kp@g.com",
        id :  1
    },
    {
        email : "kp@g.com",
        id :  1
    },
   
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // given in array we can loop it 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));