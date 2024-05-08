const ShopingCart = [
    {
        itemname : "js Course",
        qty : 50,
        price : 2999
    },
    {
        itemname : "py Course",
        qty : 50,
        price : 1999
    },
    {
        itemname : "react Course",
        qty : 50,
        price : 7999
    },
    {
        itemname : "nextjs Course",
        qty : 50,
        price : 12999
    }
]

const totalCost = ShopingCart.reduce ( (acc, item) => {
    console.log(`acc is : ${acc} and curvalue is : ${item.price} : ${item.qty} `);
    return acc+(item.price*item.qty)
    
} ,0)

// const totalCost = ShopingCart.reduce ( (acc, item) =>  acc+ (item.qty*item.price), 0 )



console.log(totalCost);
