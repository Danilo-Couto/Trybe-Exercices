"use strict";
class SuperClass {
    constructor() { this.isSuper = true; }
    sayHello() {
        console.log('Olá, mundo!');
    }
}
class SubClass extends SuperClass {
}
function myFunc(object) {
    object.sayHello();
}
const sup = new SuperClass();
const sub = new SubClass();
// myFunc(sup);
// myFunc(sub);
console.log(sup, sub);
