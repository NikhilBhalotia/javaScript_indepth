class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}nikhil`
    }
    set password(value){
        this._password = value
    }
}

const user1 = new user("nik@gmail.com",'abcd')
console.log(user1.password);
