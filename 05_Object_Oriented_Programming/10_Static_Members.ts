class RideSharing {
    private static ride: number = 0;

    start(): void {
        RideSharing.ride += 1
    }
    stop(): void {
        RideSharing.ride -= 1
    }

    getRideCount(): number {
        return RideSharing.ride;
    }
}
let ride1 = new RideSharing();
ride1.start();

let ride2 = new RideSharing();
ride2.start();

console.log(ride1.getRideCount());