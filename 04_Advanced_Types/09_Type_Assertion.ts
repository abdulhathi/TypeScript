// Type assertion
let phoneElement = document.getElementById("phone") as HTMLInputElement;

console.log(phoneElement.value);

// Type assertion in different way

let faxElement = <HTMLInputElement> document.getElementById("fax");

console.log(faxElement.value);