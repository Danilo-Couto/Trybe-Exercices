import { randomUUID } from "crypto";
import Payment from "./Payment";
import Product from "./Product";

export default class Sale {
    private _id: string;
    private _items: Array<Product>;
    private _total: number;
    private _payment: Payment;

    constructor(payment: Payment) {
        this._id = randomUUID();
        this._items = [];
        this._total = 0;
        this._payment = payment;
    }

    get id(){
        return this._id;
    }

    public addItem(item: Product) {
        if(!item) throw new Error("product invalid");
        this._items.push(item);
    }

    public calcTotal(){
        this._total = this._items.reduce((acc, p) => (acc + p.price * p.quantity), 0);
    }
}