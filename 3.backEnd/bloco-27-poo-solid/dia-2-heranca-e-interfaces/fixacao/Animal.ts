class Animal {
    constructor(public name: string, protected birthDate: Date) { }
      get age() {
      const timeDiff = Math.abs(
        Date.now() -
        new Date(this.birthDate).getTime()
      );
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }
  
  class Mammal extends Animal {
    walk() {
      console.log(`${this.name} está andando!`);
    }
  }
  
  const tiger = new Mammal(
    'Tigre',
    new Date(Date.parse('May 03, 2020')),
  );
  
  const main = (animal: Animal) => {
    console.log(animal.age);
  }
  
  main(tiger);
  tiger.walk();
  
  class Bird extends Animal {
    fly() {
      console.log(`${this.name} está voando!`);
    }

    showBirthDate() {
      console.log(this.birthDate); // Se ainda estivesse private birthDate: Date, nao daria para modificar de fora da classe e subclass. => daria  ERRO! birthDate é privado e não é visível pra subclasse Bird.
  }
}

  const parrot = new Bird(
    'Papagaio',
    new Date(Date.parse('Jun 07, 2017')),
  );
  
  console.log(parrot.age);
  parrot.fly();
  
  