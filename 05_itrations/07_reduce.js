// let prices = [100,200,300,400,500];

// let totalPrices = prices.reduce((pre,curr)=>{
// return pre+curr;
// })
// console.log(totalPrices);

let shoppingCart = [
    {
        course:"JavaScript course",
        price:4999,
    },
    {
        course:"HTML course",
        price:999,
    },
    {
        course:"CSS course",
        price:1999,
    },
    {
        course:"Data Science course",
        price:7999,
    },
    {
        course:"Web Development course",
        price:7499,
    },
]


let totalPrices = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrices);
