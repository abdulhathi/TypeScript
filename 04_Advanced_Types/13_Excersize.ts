// 1. Given the data below, define a type alias for representing users
type User = {
    name: string,
    age: number,
    occupation?: string
}
let users: User[] = [
    {
        name: "Abdul",
        age: 40,
        occupation: "Software Engineer"
    },
    {
        name: "Aysha",
        age: 33
    }
]

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these 
type Birds = {
    fly: () => void
}
type Fish = {
    swim: () => void
}

let pet1: Birds & Fish = {
    fly: () => {},
    swim: () => {}
}

type Pet = Birds | Fish

let pet2: Pet = {
    fly: () => {}
}

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let day: DaysOfWeek = "Monday"

// 4. Simplify the following code snippets:
type Address = {
    street: string
}
type UserInfo = {
    address?: Address
}
function getUser() {
    let user: UserInfo = {}
    return user
}
let user = getUser();
console.log(user && user.address ? user.address.street: undefined);

console.log(user?.address?.street);

let foo;
function bar() {}
let x = foo !== null && foo !== undefined ? foo :bar();
console.log(foo ?? bar());

// 5.  What is the problem in this piece of code?

let value:unknown = 'a'; 
if (typeof value === 'string')
    console.log(value.toUpperCase());