class user{
    constructor(username,email,password){
        this.username = username
        this.email =email
        this.password = password
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }

    createPassword(){
        return `${this.password}abc`
    }

}

let user1 = new user("Nikhil","nikhil@gmail.com",9784)
console.log(user1);
console.log(user1.changeUserName());
console.log(user1.createPassword());
