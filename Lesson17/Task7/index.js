'use strict';

 const user = {
    // put your code here
    firstName: 'John',
    lastName: 'Doe',

    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    },

    setFullName(fullName) {
        const result = fullName.split(' ');
        this.firstName = result[0];
        this.lastName = result[1];        
    },
};

console.log(user.getFullName());
user.setFullName('KKK HHH');
console.log(user.firstName, user.lastName);