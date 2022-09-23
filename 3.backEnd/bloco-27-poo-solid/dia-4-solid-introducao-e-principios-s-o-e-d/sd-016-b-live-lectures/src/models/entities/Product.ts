import { randomUUID  } from 'crypto';

export default class Product {
    private _id: string;
    private _name: string;
    private _price: number;
    private _quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this._name = '';
        this._price = 0;
        this._quantity = 0;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this._id = randomUUID();
    }

    public set name(name: string) {
        if(!name) throw new Error("name is required");
        this._name = name;
    }

    public set price(price: number) {
        if(!price) throw new Error("price is required");
        if(price < 1) throw new Error("price must be greater than 0");
        this._price = price;
    }

    public set quantity(quantity: number) {
        if(!quantity) throw new Error("quantity is required");
        if(quantity < 1) throw new Error("quantity must be greater than 0");
        this._quantity = quantity;
    }

    get quantity() {
        return this._quantity
    }

    get price() {
        return this._price
    }

    get name(){
        return this._name
    }

    get id() {
        return this._id; 
    }

}