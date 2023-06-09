// EX:1 Convert the function below to a generic function:
function echo(arg) { 
    return arg; 
}

function echo1<T>(arg: T): T {
    return arg;
}

// When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem?
function printNameA<T>(obj: T) {
    // console.log(obj.name);
}

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

// EX: 3 - An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class

class Entity<T> {
    constructor(public id: T) {}
}

// EX: 4 - Given the following interface, what does keyof User return?
interface UserA { 
    userId:number; 
    userName:string;
}

// The keyof return either "userId" (or) "username"