class Wallet {
    constructor() {
        this.balance = 0;
    }

getBalance() {
    return this.balance;
}

deposit(amount) {
this.balance += amount;
}

withdraw(amount) {
if (amount > this.balance) {
    console.log('No enouhg funds');
    return;
}
this.balance -= amount;
}
}