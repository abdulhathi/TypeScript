/* For each of these values, what type will the TypeScript compiler infer? */ 
let a = 100; // number datatype
let b = 'Coffee'; // string datatype
let c = [true, false, false]; // boolean array datatype

let d: {
    age: number
} 
d = {age: 100}
console.log(d); // object data type created in variable d and value is assigned in d

let e = [3]; // number array data type
let f;          // any data type
let g = [];     // any array data type


/* What are the compilation errors in each of the following code snippets? */

let song: { title:string, releaseYear:number} = { title:'My song', releaseYear: 1985}; // property releaseYear declared and its value is missing.
console.log(song)

let prices = [100, 200, 300]
// prices[0] = '500' // string not assign to the number

prices[3] = 400
console.log(prices)


// function myFunc(a:number, b:number):number { } // optional params not allowed and return value is missing
