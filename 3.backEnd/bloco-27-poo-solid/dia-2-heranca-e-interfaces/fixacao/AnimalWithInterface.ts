interface IAnimal {
  name: string;
  age: number;

  showBirthDate(): Date;
}

class Birdy implements IAnimal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  fly() {
    console.log(`${this.name} está voando!`);
  }

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  showBirthDate() { return this.birthDate; }
}

const parrot2 = new Birdy(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);
  
console.log(parrot2.age);
parrot.fly();