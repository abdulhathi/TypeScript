var _a;
var users = [
    {
        name: "Abdul",
        age: 40,
        occupation: "Software Engineer"
    },
    {
        name: "Aysha",
        age: 33
    }
];
var pet1 = {
    fly: function () { },
    swim: function () { }
};
var pet2 = {
    fly: function () { }
};
var day = "Monday";
function getUser() {
    var user = {};
    return user;
}
var user = getUser();
console.log(user && user.address ? user.address.street : undefined);
console.log((_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.street);
var foo;
function bar() { }
var x = foo !== null && foo !== undefined ? foo : bar();
console.log(foo !== null && foo !== void 0 ? foo : bar());
