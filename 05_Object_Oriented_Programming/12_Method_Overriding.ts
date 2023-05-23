class Display {
    constructor() {}
    getInfo(): string {
        return "Display";
    }
}

class Monitor extends Display {
    override getInfo(): string {
        return "Monitor " + super.getInfo();
    }
}

let monitor = new Monitor()
console.log(monitor.getInfo());