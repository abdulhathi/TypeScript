class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

// Generic with specify the type.
let kvpNumber = new KeyValuePair<number, number>(100, 1000);
let kvpString = new KeyValuePair<string, string>("Abdul", "Abdul Hathi");
let kvp = new KeyValuePair<number, string>(1, "A");

console.log(kvp);

// Generic without type specification
let kvp1 = new KeyValuePair(true, "abdul");
