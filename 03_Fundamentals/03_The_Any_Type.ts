let anyTypeValue;

anyTypeValue = 2
anyTypeValue = "Any value"

console.log(anyTypeValue);

// Declare a function with any data type
function render(document: any) {
    console.log(document);
}

// No implicitly in tsconfig value 
// function render1(document) {
//     console.log(document);
// }

