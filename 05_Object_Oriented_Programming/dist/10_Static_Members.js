class RideSharing {
    start() {
        RideSharing.ride += 1;
    }
    stop() {
        RideSharing.ride -= 1;
    }
    getRideCount() {
        return RideSharing.ride;
    }
}
RideSharing.ride = 0;
let ride1 = new RideSharing();
ride1.start();
let ride2 = new RideSharing();
ride2.start();
console.log(ride1.getRideCount());
