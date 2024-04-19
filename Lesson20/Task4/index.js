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
class Order {
    // put your code here
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = Math.random().toString();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.dateCreated = new Date();
    }

    checkPrice() {
        if (this.price > 1000) {
            return true;
        }
        {
            return false;
        }

    }

    confirmOrder() {
        if (this.isConfirmed == true) {
            return false;
        } else
        {
            this.isConfirmed = true;
            this.dateConfirmed = new Date();        
        }
    }

    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {
            return true;
        }
        {
            return false;
        }
    }
}

const order1 = new Order();
//console.log(order1);
console.log(order1.confirmOrder());
console.log(order1);