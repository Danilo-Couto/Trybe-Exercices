"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);
/* console.log(person1);
person1.speak()

console.log(person2);
person2.walk(); */
// Crie uma classe cujo objeto represente um Cachorro.
var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medim";
    Size["big"] = "big";
})(Size || (Size = {}));
class Dog {
    constructor(name, birthDate, size) {
        this.name = name;
        this.birthDate = birthDate;
        this.size = size;
    }
    bite() {
        console.log(`${this.name} não late, morde.`);
    }
}
const dog1 = new Dog("Lord", new Date("1986-01-01"));
const dog2 = new Dog("Jon Doe", new Date("1980-08-05"), Size.medium);
dog1.bite();
// console.log(dog2);
// Crie uma classe cujo objeto represente uma Casa.
// Crie uma classe cujo objeto represente um Voo.
