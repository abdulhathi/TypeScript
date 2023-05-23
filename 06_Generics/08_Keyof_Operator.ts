class Bag<T> {
    protected _objects: T[] = [];

    add(value: T): void {
        this._objects.push(value);
    }
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

class Item {
    constructor(public name: string, public price: number) {}
}

let bag = new Bag<Item>()
bag.add(new Item("Book", 100));
bag.add(new Item("Pen", 10));
bag.add(new Item("Pencil", 1));

console.log(bag.find("price", 10));