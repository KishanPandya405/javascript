const myNum = [1, 2, 3]

// const myTotal = myNum.reduce (  (acc, curvalue) => {
//     console.log(`acc: ${acc} and currval : ${curvalue}`);
//     return acc + curvalue
// },0)

// const myTotal = myNum.reduce (function (acc, currval) {
//     console.log(`acc is : ${acc} currval is : ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNum.reduce ( (acc, currval) => acc+currval, 0)

console.log(myTotal);


const ShopingCart = [
    {
        itemname : "js Course",
        price : 2999
    },
    {
        itemname : "py Course",
        price : 999
    },
    {
        itemname : "React Course",
        price : 12999
    }
]

// const totalCost = ShopingCart.reduce ( (acc, item) => acc + item.price, 0)

// console.log(totalCost);

const totalCost = ShopingCart.reduce ( function (acc, item) {
    console.log(`acc is : ${acc} and item is ${item.price}`);
    return acc + item.price
},0)

console.log(totalCost);