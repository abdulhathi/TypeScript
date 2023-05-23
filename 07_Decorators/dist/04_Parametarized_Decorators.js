var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ComponentDec1(options) {
    return (constructor) => {
        console.log("Component decorator is called");
        constructor.prototype.options = options;
        console.log(options);
    };
}
let MyClass = class MyClass {
};
MyClass = __decorate([
    ComponentDec1({ options: "#My-Profile" })
], MyClass);
