class Display1 {
    constructor() {}
    getInfo(): string {
        return "Display";
    }
}

class Television extends Display1 {
    override getInfo(): string {
        return "TV " + super.getInfo();
    }
} 

class Mobile extends Display1 {
    override getInfo(): string {
        return "Mobile " + super.getInfo();
    }
}

let displays = [new Television(), new Mobile()];
for (const display of displays) {
    console.log(display.getInfo())
}