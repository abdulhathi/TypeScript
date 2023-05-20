// Object creation with intializtion
let student: {
    id: number,
    fullName: string,
    gender: boolean
} = {
    id: 1001,
    fullName: "Abdul Hathi",
    gender: true
}

console.log(student);

// Object creation using the type alias
type Student = {
    id: number,
    fullName: string,
    gender: boolean
}

let std1: Student = { id:1001, fullName:"student1", gender: true}
console.log(std1);