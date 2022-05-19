export default class Person {
    // private _name: string;
    // private _birthdate: Date;
      
    constructor(private _name: string, private _birthdate: Date) {
      this._name = _name;
      this._birthdate = _birthdate;
    }
    
    get name(): string { return this._name; } 
    get birthdate(): Date { return this._birthdate; }
  
    set name(newName: string) {
        if (newName.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this.name = newName;
    }

    static getAge(value: Date): number { // o que é static?
        const diff = Math.abs(new Date().getTime() - value.getTime());
        const yearMs = 31_536_000_000;
        return Math.floor(diff / yearMs);
      }
    
    set birthdate(newBirthDate: Date) {
        if (newBirthDate.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(newBirthDate) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.'); 
        this.birthdate = newBirthDate;
    }
 }
