/* 
Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
*/

class Student {
    private _enrollment: string;
    private _name: string
    private _examsGrades: number[];
    private _worksGrades: number[];
  
    constructor(enrollment: string, name: string) {
      this._enrollment = enrollment;
      this._name = name;
      this._examsGrades = [];
      this._worksGrades = [];
    }
  
    get enrollment(): string {
      return this._enrollment;
    }
  
    set enrollment(value: string) {
      this._enrollment = value;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      if (value.length < 3) {
        throw new Error('O nome deve conter no mínimo 3 caracteres.');
      }
      this._name = value;
    }
  
    get examsGrades(): number[] {
      return this._examsGrades;
    }
  
    set examsGrades(value: number[]) {
      if (value.length > 4) {
        throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }
      this._examsGrades = value;
    }
  
    get worksGrades(): number[] {
      return this._worksGrades;
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
}
  
  // Para testar!
  
  const personOne = new Student('202001011', 'Maria da Silva');
  console.log(personOne);
  
  const personTwo = new Student('202001012', 'João da Silva');
  console.log(personTwo);

  /* Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.
  */