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
const testEvent = {
    quests: [
{ name: 'Tom', age: 17, email: 'example@seryer.com'},
{ name: 'Bob', age: 18, email: 'example@seryer.com'}
    ],
    message: 'Welcome to the party',
    getInvitations() {
        return this.guests
        .filter(({age}) => age >= 18)
        .map(({ name, email}) => ({            
                message: `Dear ${name}! ${this.message}`,
                email,                
            }));    
        
    }
}


console.log(testEvent.getInvitations());