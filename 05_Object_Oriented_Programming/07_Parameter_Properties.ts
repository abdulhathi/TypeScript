class Device {
    constructor(public readonly deviceId: number, public deviceName: string) {
    }
}

const laptop = new Device(1001, "Mac book pro");
console.log(laptop.deviceName);