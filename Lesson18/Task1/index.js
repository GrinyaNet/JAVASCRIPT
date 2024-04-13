'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

  // put your code here
const event = {
    quests: [
{ name: 'Tom', email: 't@gmail.com', age: 17},
{ name: 'Bob', email: 'b@gmail.com', age: 18}
    ],
    message: 'Welcome to the party',
    getInvintations() {
        return this.guests
        .filter(({age}) => age >= 18)
        .map(({ name, email}) => ({            
                text: `Hi ${name}, ${this.message}`,
                email
            }));    
        
    }
}


console.log(event.getInvintations());