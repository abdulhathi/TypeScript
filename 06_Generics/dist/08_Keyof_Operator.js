class Bag {
    constructor() {
        this._objects = [];
    }
    add(value) {
        this._objects.push(value);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bag = new Bag();
bag.add(new Item("Book", 100));
bag.add(new Item("Pen", 10));
bag.add(new Item("Pencil", 1));
console.log(bag.find("price", 10));
