/* 
Utilizando o mesmo código dos exercícios de fixação anteriores:
    Altere a visibilidade dos atributos definidos na classe Tv para private.
    Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
    O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
    Em caso positivo, definir este valor para o atributo _connectedTo;
    Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"

Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

 */

class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;
  
    constructor(brand: string, size: number, resolution: string, connections: string[]) {
      this._brand = brand;
      this._size = size;
      this._resolution = resolution;
      this._connections = connections;
    }
    turnOn():void {
      console.log(` ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
    }

    get connectedTo() {
        return this._connectedTo as string;
      }

    set connectedTo(value: string) {
        if (this._resolution.includes(value)) {
            this.connectedTo = value;
        } console.log('Sorry, connection unavailable!')
    }
  }
  
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn()

tv1.connectedTo = 'bluetooth';
console.log('connectedTo to', tv1.connectedTo)