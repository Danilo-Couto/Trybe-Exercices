import IEmployee from "./IEmployee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements IEmployee {
    private _subject: Subject;
    private _salary: number;
    private _registration = String(); // O QUE É ISSO?
    private _admissionDate!: Date;

    constructor(name: string, birthdate: Date, subject: Subject, salary: number) {
        super(name, birthdate);
        
        this._subject = subject;
        this._salary = salary;
        this._admissionDate= new Date();
        this._registration = this.generateRegistration();
    }
    get subject(): Subject {
        return this._subject;
    }
   
    set subject(value: Subject) {
        this._subject = value;
    }
    
    get registration(): string {
        return this._registration;
    }

    set registration(value: string) {
        if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._registration = value;   
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        if (value < 0) throw new Error('O salário não pode ser negativo.');
        this.salary = value;   
    }

    get admissionDate(): Date {
        return this._admissionDate;
      }
    
    set admissionDate(value: Date) {
      if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
    }
    
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}