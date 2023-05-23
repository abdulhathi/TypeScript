interface Devices {
    name: string;
    price: number;
}

// Type Mapping
type ReadOnlyDevice = {
   readonly [Property in keyof Devices]: Devices[Property];
}

let readOnlyDevice: ReadOnlyDevice = {
    name: "Laptop",
    price: 2000
}
// readOnlyDevice.name = "Computer";

// Generic readonly type
type ReadOnly<T> = {
    [Property in keyof T]: T[Property]
}
// Generic Optional
type Optional<T> = {
    [Property in keyof T]?: T[Property]
}
// Generic Nullable
type Nullable<T> = {
    [Property in keyof T]: T[Property] | null
}