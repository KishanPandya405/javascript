//let a= 100 

if (true) {
    let a= 10
    const b = 20
    //console.log("INNER:",  a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "kishan"

    function two(){
        const platform = "youtube"
        //console.log(username);
    }
    //console.log(platform);
    two()
}
one()

if (true){
    const username = "kp"
    if (username === "kp"){
        const website = " Tridev It Solution"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



//+++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++

function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num +1
}
addTwo(5)