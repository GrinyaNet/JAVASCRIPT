const user = {
    // put your code here
    firstName: 'John',
    lastName: 'Doe',

        getfullName() {
            return (`${this.firstName} ${this.lastName}`);
        }
    
};

console.log(user.getfullName());