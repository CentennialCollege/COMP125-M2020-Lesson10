module objects
{
    export class person
    {
        private m_name: string;
        private m_age: number;

        // constructor
        constructor(name:string, age:number)
        {
            this.m_name = name;
            this.m_age = age;
        }

        // public methods

        public saysHello(): void
        {
            console.log(`${this.m_name} says hello!`);
        }
    }
}