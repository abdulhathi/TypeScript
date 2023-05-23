function MinLength(length: number) {
    return (target: any, peropertyName: string) => {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                value = newValue + "_D";
            }
        }
        Object.defineProperty(target, peropertyName, descriptor);
    }
}

class UserB {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

let userB = new UserB("Abdul");
console.log(userB.password);

