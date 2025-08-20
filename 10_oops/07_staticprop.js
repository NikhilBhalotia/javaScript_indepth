class user{
    constructor(username){
        this.username = username
    }
    static isLoggedIn(){
        console.log(`${this.username} is loggedIn`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
}

const user1 = new user("Nikhil")
console.log(user1);

// user1.isLoggedIn();  // ---> we don't have access to this method because it is declared using the static keyword

const teacher1 = new Teacher("Nikhil","nikhil@123.com",1234)
console.log(teacher1);

// teacher1.isLoggedIn()  // ---> we don't have access to this method because it is declared using the static keyword


