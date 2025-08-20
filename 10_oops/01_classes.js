// const user = {
//     userName:"Nikhil",
//     age:21,
//     isloggedIn:true,
//     details:function(){
//         // console.log("User details are retrived");
//         // console.log(`Username : ${this.userName}`);
//         console.log(this);
        
        
//     }

// }
// console.log(user.userName);
// console.log(user.details())
// console.log(this);


//  creating instance of function without new keyword

// function user(userName,age){
//     this.userName = userName
//     this.age = age

//     return this
// }

// const user1 = user("Nikhil",21)
// const user2 = user("Amit",23)  // the second instance is overwriting the previous instance
// console.log(user1);
// console.log(user2);



//  creating instance of function using new keyword


// function user(userName,age){
//     this.userName = userName
//     this.age = age

//     return this
// }

// const user1 = new user("Nikhil",21)
// const user2 = new user("kuldeep",23)
// console.log(user1);
// console.log(user2);



