var _a, _b, _c, _d;
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date(), products: [] };
}
console.log((_b = (_a = getCustomer(1)) === null || _a === void 0 ? void 0 : _a.birthDay) === null || _b === void 0 ? void 0 : _b.getFullYear());
// Optional property access operator
console.log((_c = getCustomer(0)) === null || _c === void 0 ? void 0 : _c.birthDay);
// Optional element access operator
var customer = getCustomer(1);
console.log((_d = customer === null || customer === void 0 ? void 0 : customer.products) === null || _d === void 0 ? void 0 : _d[0]);
