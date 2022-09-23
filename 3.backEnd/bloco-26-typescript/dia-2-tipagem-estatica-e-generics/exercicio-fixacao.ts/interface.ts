interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "John",
    lastName: "Doe",
    fullName(): string {
        return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
    }
}

employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

// Podemos estender uma interface, usando a palavra reservada extends:

interface Teacher extends Employee {
    firstName: string;
    lastName: string;
    subject: string;
    fullName(): string;
    sayHello(): string;
}

let teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
    sayHello(): string {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
}

// Crie uma interface cujo objeto represente um Automóvel.

interface Automobile {
    name: string;
    brand: string;
    color: string;
    doors: number;
    gears: number;
    turnOn: () => void;
    turnOff: () => void;
    speedUp: () => void;
    speedDown: () => void;
    break: () => void;
  }