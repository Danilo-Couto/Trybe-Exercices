enum EyeColor {
    Black = "Pretos",
    Blue = "Azuis",
    Green = "Verdes",
    Brown = "Castanhos",
}

class Person {
    name: string;
    birthDate: Date;
    eyeColor?: EyeColor;

    constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
        this.name  = name;
        this.birthDate  = birthDate;
        this.eyeColor  = eyeColor;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

/* console.log(person1);
person1.speak()

console.log(person2);
person2.walk(); */


// Crie uma classe cujo objeto represente um Cachorro.

enum Size {
    small= 'small',
    medium= 'medim',
    big= 'big',
}

class Dog {
    name: string;
    birthDate: Date;
    size?: Size;

    constructor(name: string, birthDate: Date, size?: Size) {
        this.name  = name;
        this.birthDate  = birthDate;
        this.size  = size;
    }

    bite(): void {
        console.log(`${this.name} não late, morde.`);
    }
}


const dog1 = new Dog("Lord", new Date("1986-01-01"));
const dog2 = new Dog("Jon Doe", new Date("1980-08-05"), Size.medium);

dog1.bite();
// console.log(dog2);


// Crie uma classe cujo objeto represente uma Casa.

// Crie uma classe cujo objeto represente um Voo.

