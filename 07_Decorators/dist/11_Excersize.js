var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// EX : 1 -> Create a decorator for adding a sauce to Pizza instances
function Sauce(sauce) {
    return (constructor) => {
        constructor.prototype.sauce = sauce;
        console.log(constructor);
    };
}
let Pizza = class Pizza {
};
Pizza = __decorate([
    Sauce('pesto')
], Pizza);
let pizza = new Pizza();
