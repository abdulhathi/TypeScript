function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value as Function;
    descriptor.value = function(...args: any) {

        console.log("Before Message log");
        // console.log(...args + " This is from decorator");
        originalMethod.call(this, ...args); 
        console.log("After Message log");
    }
    // originalMethod.call(this, ...args);
}


class Person {
    @Log
    sayMessage(message: string) {
        console.log(message);
    }
}

new Person().sayMessage("Hi")