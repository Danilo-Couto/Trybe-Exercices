class SuperClass {
    isSuper: boolean

    constructor() {this.isSuper = true }

    // protected sayHello() {
    public sayHello() {        
    console.log('Olá, mundo!');
    }
}

class SubClass extends SuperClass {
    constructor() {
        super(); // é preciso chamar o constructor da classe pai para recriar o que o this.constructor da class filha nao constroe
        this.isSuper = false;
    }

    public sayHello2() {
    this.sayHello()
    }
}

function myFunc(object: SuperClass) {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub!');
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);
