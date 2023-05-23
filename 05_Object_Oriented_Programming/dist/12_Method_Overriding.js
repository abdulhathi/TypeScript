class Display {
    constructor() { }
    getInfo() {
        return "Display";
    }
}
class Monitor extends Display {
    getInfo() {
        return "Monitor " + super.getInfo();
    }
}
let monitor = new Monitor();
console.log(monitor.getInfo());
