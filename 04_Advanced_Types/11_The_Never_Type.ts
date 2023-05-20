function processEvents(): never {
    while (true) {

    }
}

processEvents();
console.log("This message is unreachable");

function throwError(): never {
    throw new Error("asdf")    
}

throwError();
console.log("This message is unreachable");