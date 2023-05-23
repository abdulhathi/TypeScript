class SchoolPerson {
    constructor(public firstName: string, public lastName: string) {}
}

class SchoolStudent extends SchoolPerson {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    learning(): string {
        return "School students can learn";
    }
}

class SchoolTeacher extends SchoolPerson {
    constructor(public teacherId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }
    teaching(): string {
        return "School teacher can teaching";
    }
}