// EX : 1 -> Create a decorator for adding a sauce to Pizza instances
function Sauce(sauce: string) {
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
        console.log(constructor);
    }
}
@Sauce('pesto')
class Pizza {

}

let pizza = new Pizza();
