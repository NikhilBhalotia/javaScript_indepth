const myHeros = ["thor","captain america"];

const heroPower = {
    thor:"hammer",
    captain_america:"sheild",

}

//  it gives the access to the below childs

// Object.prototype.sayMyName = function(){
//     console.log("My name is Nikhil");  
// }
// heroPower.sayMyName()
// myHeros.sayMyName()


// Array.prototype.favHero = function(){
//     console.log("My fav hero is thor");
    
// }

// myHeros.favHero()
// heroPower.favHero()



//  Inheritance

// const user ={
//     Name:"Nikhil",
//     age:21,
//     isAdult:true

// }

// const teacher={
//     field:"CS",
//     salary:50000,
//     __proto__:user, // prototype inheritance 
// }

// const youTuber={
//     channelName:"chaiAurCode",
//     subscriber:700000,
// }
// youTuber.__proto__=user; // prototype inheritance

// console.log(teacher.isAdult);
// console.log(youTuber.Name);



//  modern sytax:-

// const user ={
//     Name:"Nikhil",
//     age:21,
//     isAdult:true

// }

// const teacher={
//     field:"CS",
//     salary:50000,
// }

// const youTuber={
//     channelName:"chaiAurCode",
//     subscriber:700000,
// }

// Object.setPrototypeOf(teacher,user)
// console.log(teacher.Name);


// const userName ="Nikhil   ";

// String.prototype.trueLength = function(){
// console.log(this);
// console.log(`True length is : ${this.trim().length}`);

// }
// userName.trueLength()
// "chaiAurcode  ".trueLength()