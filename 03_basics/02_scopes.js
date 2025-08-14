// let Name = "Nikhil";
// const height = 170;
// var age = 21;

// {
//   let Name = "Kuldeep";
//   const height = 180;
//   var age = 24;
//   console.log("Inner : ", Name);
//   console.log("Inner : ", height);
//   console.log("Inner : ", age);
// }

// console.log("Outer : ", Name);
// console.log("Outer : ", height);
// console.log("Outer : ", age);


// function one(){
//     let Name = "Nikhil"
//     function two(){
//         let age =21;
//         console.log(Name);
        
//     }
//     // console.log(age);
//     two();
    
// }
// one();


// if(true){
//    let Name = "Nikhil"

//     if(true){
//        let website = " youtube";
//        console.log(Name+website);

//     }
//     // console.log(website);
    
// }
// console.log(Name);


//  can access before declaration
// addOne(5);
// function addOne(num){
//     console.log(num+1);
// }


//  cannot access before declaration
// addTwo(5)
// const result = function addTwo(num){
// console.log(num+2);
// }


// const user = {
//     Name : "Nikhil",
//     age : 21,
//     welcomeUser:function welcomeMessage(){
//         console.log(`${this.Name}, welcome to the website!`);
//         console.log(this);
        
//     }   
// }


// console.log(user);
// console.log(user.Name);
// user.welcomeUser();

// user.Name = "yaya";
// user.welcomeUser()

// console.log(this);


// function printThis(){
//     console.log(this);
    
// }
// printThis()

// const chai = ()=>{
//     console.log(this);
    
// }
// chai()



// -------------------------->  Arrow functions:- <----------------------

//  simple arrow function
// let sum = (num1,num2)=>{
//     console.log(num1+num2);  
// }
// sum(2,3)

// 2. method two
// let sum = (num1,num2)=> num1+num2  // implicit return

// console.log(sum(2,3));

//  returning object 
// let sum = (num1,num2)=> ({Name:"Nikhil"})

// console.log(sum(1,2));

//  IIFE :-

// (function simple(){
//     console.log("Nikhil");  
// })();

// (function chai(){
//     console.log(`chai is not good for health`);
// })();

// ((Name)=>{
//     console.log(`${Name} is a good guy`);
    
// })("Nikhil");

