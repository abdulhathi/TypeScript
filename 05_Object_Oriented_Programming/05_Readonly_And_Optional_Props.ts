class Employee {
    readonly id: number;    // readonly property
    name: string;
    nickName?: string;  //Optional property

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

console.log(new Employee(100, "Abdul"));