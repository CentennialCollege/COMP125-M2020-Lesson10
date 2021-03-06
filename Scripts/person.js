var objects;
(function (objects) {
    class Person {
        // constructor
        constructor(name, age) {
            this.Name = name;
            this.Age = age;
        }
        // PUBLIC PROPERTIES
        get Name() {
            return this.m_name;
        }
        set Name(value) {
            this.m_name = value;
        }
        get Age() {
            return this.m_age;
        }
        set Age(value) {
            this.m_age = value;
        }
        // public methods
        SaysHello() {
            console.log(`${this.Name} says hello!`);
        }
    }
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map