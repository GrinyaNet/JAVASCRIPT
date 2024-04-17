class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createEmpty() {
        const user = {
        name: '',
        age: null,
        }
        return user;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {

        if (value < 0) {
            return false;
        }
        this.age = value;
        if (value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    }

}

const user1 = new User('Bob', 25);
console.log(User.createEmpty());
//console.log(user1.setAge());