class Car {
    constructor(private _carNumber: number, carName: string, carType: string) {
    }

    get CarNumber(): number {
        return this._carNumber;
    }

    set CarNumber(value: number) {
        this._carNumber = value
    }
}

const honda = new Car(1001, "Honda Accord", "Sedane");
console.log(honda.CarNumber);

honda.CarNumber = 1002;
console.log(honda.CarNumber);