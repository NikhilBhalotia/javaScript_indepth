// function sayMyName(){ // function defination
//     console.log("N");
//     console.log("i");
//     console.log("k");
//     console.log("h");
//     console.log("i");
//     console.log("l");
// }

// sayMyName //---> refrence of function
// sayMyName() // ----> calling(execution)
 



// function sumTwoNumbers(num1,num2){
// console.log(num1+num2);

// }
// sumTwoNumbers(1,2);
// sumTwoNumbers(1,"2");
// sumTwoNumbers(1,"n");
// sumTwoNumbers(1,null)
// sumTwoNumbers(1,undefined)

// const result = sumTwoNumbers(1,2);
// console.log("Result : ",result);



// function sumTwoNumbers(num1,num2){
//     console.log("Before return");
//     return num1+num2;
//     console.log("After return");
    
// }
 
// const result = sumTwoNumbers(1,2);
// console.log("Result: ",result);



// function isLoggedIn(username = "sam"){

//     return `${username} just logged in`;
// }
// console.log(isLoggedIn("Nikhil"));
// console.log(isLoggedIn(""));
// console.log(isLoggedIn());




// function calCartTotal(item){
// return item;
// }
// console.log(calCartTotal(100,200,300));


// function calCartTotal(item1,item2, ...items){
// return `item1 : ${item1}, item2 : ${item2}, items : ${items} `;
// }
// console.log(calCartTotal(100,200,300,2000,6900));



// function calCartTotal(...item){
//     let sum=0;
// for (const el of item) {
//     sum+=el;
// }
// return sum;
// }
// console.log(calCartTotal(100,200,300,500));



//  ----> passing object to the function  <--------

// const user = {

//     Name:"Nikhil",
//     age:21
// }
// function printUser(userObj){
// console.log(`user name is ${userObj.Name} and age is ${userObj.age}`);

// }

// printUser(user);
// printUser({Name:"kuldeep",age:23});

//  -----> passing array to function <----------

// let scores = [101,169,69,84];

// function printScores(scoreArr){
// console.log(scoreArr);

// }
// printScores(scores);
// printScores([100,45,33,82,183,254])