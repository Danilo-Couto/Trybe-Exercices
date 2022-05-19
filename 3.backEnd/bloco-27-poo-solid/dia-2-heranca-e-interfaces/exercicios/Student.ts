import Person from "./Person";

export default class Student extends Person {
    private _enrollment = String();
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];

    constructor(name: string, birthdate: Date) {
        super(name, birthdate);
        this.enrollment = this.generateEnrollment();
    }
    get enrollment(): string {
        return this._enrollment;
      }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }    

    set enrollment(value: string) {
        if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._enrollment = value;
    }

    set examsGrades(value: number[]) {
        if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        this._examsGrades = value;
    }
    
    set worksGrades(value: number[]) {
        if (value.length > 2) {
        throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }
        this._worksGrades = value;
    }
  
    sumGrades() {
        const allGrades = [...this.examsGrades, ...this.worksGrades];
        return allGrades.reduce((previousNote, note) => {
            note += previousNote;
            return note;
        }, 0);
    }
  
    avgGrades() {
      const allGrades = [...this.examsGrades, ...this.worksGrades];
      const sumGrades = this.sumGrades();
      const avg = sumGrades / allGrades.length;
      return avg;
    }

    generateEnrollment():string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
 }