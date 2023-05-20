class Car {
    constructor(_carNumber, carName, carType) {
        this._carNumber = _carNumber;
    }
    get CarNumber() {
        return this._carNumber;
    }
    set CarNumber(value) {
        this._carNumber = value;
    }
}
const honda = new Car(1001, "Honda Accord", "Sedane");
console.log(honda.CarNumber);
honda.CarNumber = 1002;
console.log(honda.CarNumber);
