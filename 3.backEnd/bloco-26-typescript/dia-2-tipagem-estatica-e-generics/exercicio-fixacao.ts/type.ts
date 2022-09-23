type Point = {
    x: number;
    y: number;
  };
  
  
  function printCoord(pt: Point) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
  }
  
  printCoord({ x: 100, y: 100 });
  //saída:
  //O valor da cordenada x é: 100
  //O valor da cordenada y é: 100

// Crie um type para um objeto que represente um pássaro.
type Bird = {
    wings: 2;
    beaks: 1;
    biped: true;
  }

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Sum = (a: number, b: number) => number;

// Crie um type para um objeto que represente um endereço.
type Adress = {
    street: string;
    number: number;
}

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type stateOfMatter = 'liquid' | 'solid' | 'gas';

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type idPerson = number | string;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type OS = 'linux' | 'macOs' | 'windows';

// Crie um type union que represente as vogais do alfabeto.

type Vowels = "a" | "e" | "i" | "o" | "u";