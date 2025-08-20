class user{
    constructor(username){
        this.username = username
    }
    isLoggedIn(){
        console.log(`${this.username} is loggedIn`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    course(){
        console.log(`${this.username} is teaching`);
        
    }
}

const chai = new Teacher("chai","chai@gmail.com",1234);

// console.log(chai);
// chai.isLoggedIn()
// chai.course()

const Tea = new user("Nikhil")

// console.log(Tea);
// Tea.isLoggedIn()

// console.log(chai instanceof Teacher);
// console.log(chai instanceof user);

