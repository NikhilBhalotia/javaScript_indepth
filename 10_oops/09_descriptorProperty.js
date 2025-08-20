// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


const chai = {
    Name:"Ginger chai",
    price: 25,
    isHot:true,
    orderChai:function(){
        console.log("Chai is ordered");
        
    }
}

// console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"Name"))

Object.defineProperty(chai,"Name",{
    writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"Name"))

// chai.Name = "Masala chai"
// console.log(chai.Name);

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(key+": "+value);
    }
    
}
