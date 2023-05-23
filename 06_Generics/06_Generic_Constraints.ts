// Union literal type constrains 

function getResult<T extends number | string>(value: T) {
    console.log(value);
}

getResult(100)
getResult("Abdul")

// Passing the object as function parameter

function printObject<T extends { name: string }>(value: T) {
    console.log(value);
}

printObject({name: "Abdul"});

// Passing the interfaces in function paramenter
interface Color {
    R: number;
    G: number;
    B: number;

    getInfo(): string;
}
class BlueColor implements Color {
    constructor(public R: number, public G: number, public B: number) {}
    getInfo(): string {
        return `Color : ${this.R}:${this.G}:${this.B}`;
    }
}

function printColor<T extends Color>(color: T) {
    console.log(color.getInfo());
}
printColor(new BlueColor(100,100,100))