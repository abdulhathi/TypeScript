type WatchParameter = {
    name: string,
    index: number
}
const parameters: WatchParameter[] = []
function Watch(target: any, methodName: string, parameterIndex: number) {
    parameters.push({name: methodName, index: parameterIndex});
}

class Vehicle {
    move(@Watch speed: number) {}
}

let vehicle = new Vehicle();
vehicle.move(100);
console.log(parameters);