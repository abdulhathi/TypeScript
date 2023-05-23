function Capitalize(target: any, methodName: any, descriptor: PropertyDescriptor) {
    const currDecorator = descriptor.get;
    descriptor.get = function() {
        let result = currDecorator?.call(this)
        return (typeof result === "string") ? result.toUpperCase() : result;
    }
}

class PersonA {
    constructor(public firstName: string, public lastName: string) {}
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new PersonA("Abdul Hathi", "Mohamed Hussain")
console.log(person.fullName);