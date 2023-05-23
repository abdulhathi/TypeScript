class Display1 {
    constructor() { }
    getInfo() {
        return "Display";
    }
}
class Television extends Display1 {
    getInfo() {
        return "TV " + super.getInfo();
    }
}
class Mobile extends Display1 {
    getInfo() {
        return "Mobile " + super.getInfo();
    }
}
let displays = [new Television(), new Mobile()];
for (const display of displays) {
    console.log(display.getInfo());
}
