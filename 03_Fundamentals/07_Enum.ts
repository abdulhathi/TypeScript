// Enum with auto generated number
const enum Size {
    Small,
    Medium,
    Large
}

const size: Size = Size.Large

console.log(size)

// Enum with custom specified number
const enum AddressType {
    Home = 1,
    Lodge,
    Condo,
    TownHome
}

console.log(AddressType.TownHome);

// Enum with custom specified charecter
const enum Alphabets {
    Apple = "A",
    Ball = "B",
    Cat = "C"
}

console.log(Alphabets.Apple);