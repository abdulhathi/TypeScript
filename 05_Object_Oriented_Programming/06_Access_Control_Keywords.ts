class SchoolStudent {
    private id: number;  // private id
    name: string;        // public name

    constructor(id: number,  name: string) {
        this.id = id;
        this.name = name;
    }

    private getStudentInfo(): string {
        return `${this.id} - ${this.name}`;
    }
}

const std = new SchoolStudent(1001, "abdul")
console.log(std);


// console.log(std.getStudentInfo())  // getStudentInfo is not accessible because its the private