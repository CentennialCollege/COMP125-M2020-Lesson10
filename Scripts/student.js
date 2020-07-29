var objects;
(function (objects) {
    class Student extends objects.Person {
        // constructor
        constructor(name, age, studentID) {
            super(name, age);
            this.StudentID = studentID;
        }
        // PUBLIC PROPERTIES
        get StudentID() {
            return this.m_studentID;
        }
        set StudentID(value) {
            this.m_studentID = value;
        }
        Studies() {
            console.log(`${this.Name} is studying`);
        }
    }
    objects.Student = Student;
})(objects || (objects = {}));
//# sourceMappingURL=student.js.map