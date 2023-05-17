/* For each of these values, what type will the TypeScript compiler infer? */
var a = 100; // number datatype
var b = 'Coffee'; // string datatype
var c = [true, false, false]; // boolean array datatype
var d;
d = { age: 100 };
console.log(d); // object data type created in variable d and value is assigned in d
var e = [3]; // number array data type
var f; // any data type
var g = []; // any array data type
/* What are the compilation errors in each of the following code snippets? */
var song = { title: 'My song', releaseYear: 1985 }; // property releaseYear declared and its value is missing.
console.log(song);
var prices = [100, 200, 300];
// prices[0] = '500' // string not assign to the number
prices[3] = 400;
console.log(prices);
