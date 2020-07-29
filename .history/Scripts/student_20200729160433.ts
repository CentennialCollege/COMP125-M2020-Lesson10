module objects{
    export class Student extends Person
    {
        // PRIVATE INSTANCE VARIABES (FIELDS)
        private m_studentID:string;

        // PUBLIC PROPERTIES
        get StudentID():string
        {
            return this.m_studentID;
        }

        set StudentID(value:string)
        {
            this.m_studentID = value;
        }


        // constructor
        constructor(name:string, age:number, studentID:string)
        {
            super(name, age);


        }
    }
}