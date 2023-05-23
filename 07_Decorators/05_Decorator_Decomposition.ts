
function Decorator1(constructor: Function) {
    console.log("Decorator1 called");
    console.log(constructor);
}

function Decorator2(constructor: Function) {
    console.log("Decorator2 called");
    console.log(constructor);
}

@Decorator1
@Decorator2
class DecTest {}