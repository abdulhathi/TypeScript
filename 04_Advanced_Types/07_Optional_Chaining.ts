type Customer = {
    birthDay?: Date,
    products: string[] | null | undefined
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthDay: new Date(), products: [] };
}

console.log(getCustomer(1)?.birthDay?.getFullYear())
// Optional property access operator
console.log(getCustomer(0)?.birthDay)

// Optional element access operator
let customer = getCustomer(1);
console.log(customer?.products?.[0]);