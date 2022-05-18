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
        super();
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

