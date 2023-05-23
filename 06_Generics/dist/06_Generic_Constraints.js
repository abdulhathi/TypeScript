// Union literal type constrains 
function getResult(value) {
    console.log(value);
}
getResult(100);
getResult("Abdul");
// Passing the object as function parameter
function printObject(value) {
    console.log(value);
}
printObject({ name: "Abdul" });
class BlueColor {
    constructor(R, G, B) {
        this.R = R;
        this.G = G;
        this.B = B;
    }
    getInfo() {
        return `${this.R}:${this.G}:${this.B}`;
    }
}
function printColor(color) {
    console.log(color.getInfo());
}
printColor(new BlueColor(100, 100, 100));
