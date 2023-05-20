class Device {
    constructor(deviceId, deviceName) {
        this.deviceId = deviceId;
        this.deviceName = deviceName;
    }
}
const laptop = new Device(1001, "Mac book pro");
console.log(laptop.deviceName);
