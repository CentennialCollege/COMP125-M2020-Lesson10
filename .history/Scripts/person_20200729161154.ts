 module objects 
 {
    export class Person
    {
        // PRIVATE INSTANCE VARIABLES(FIELDS)
        private m_name: string;
        private m_age: number;

        // PUBLIC PROPERTIES
        get Name():string
        {
            return this.m_name;
        }

        set Name(value:string)
        {
            this.m_name = value;
        }

        get Age():number
        {
            return this.m_age;
        }

        set Age(value:number)
        {
            this.m_age = value;
        }


        // constructor
        constructor(name:string, age:number)
        {
            this.m_name = name;
            this.m_age = age;
        }

        // public methods

        public SaysHello(): void
        {
            console.log(`${this.m_name} says hello!`);
        }
    }
 }
 
 