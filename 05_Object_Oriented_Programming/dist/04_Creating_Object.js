class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount.");
        this.balance += amount;
    }
}
const account = new Account(100, "Abdul", 100);
console.log(account.balance);
account.deposit(100);
console.log(account.balance);
// Checking the instance & type of the object
console.log(typeof account);
console.log(account instanceof Account);
