// for


// for (let k = 0; k <= 10; k++) {
//     const element = k;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value : ${j} and inner loop${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["kp", "jp", "ap"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

for (let index = 0; index < 20; index++) {
    const element = 20;
    if (index == 5) {
        console.log("value detected 5");
        break
    }
    console.log(`value of index is: ${index}`);
}


