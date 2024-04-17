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
    constructor(price, city, type, id) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = id;
        this.isConfirmed = false;
        this.dateConfirmed = new Date();
    }

    checkPrice(sum) {
        if (sum > 1000) {
            return true;
        }
        {
            return false;
        }

    }

    confirmOrder(isConfirmed) {
        if (this.isConfirmed == true) {
            return false
        }
        {
            this.isConfirmed = true;
            console.log(this.dateConfirmed = new Date());

        }
    }

    isValidType(type) {
        if (type === 'Buy' || type === 'Sell') {
            return true;
        }
        {
            return false;
        }
    }
}

const order1 = new Order();
console.log(order1.confirmOrder(true));