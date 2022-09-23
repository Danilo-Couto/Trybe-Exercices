import Sale from "../entities/Sale";

const fakeDataBase: Array<Sale> = [];

export default class SaleRepository {
    constructor(private dataBase: Array<Sale> = fakeDataBase) {
        this.dataBase = dataBase;
    }

    getAll(): Array<Sale> {
        return this.dataBase;
    }

    getById(id: string): Sale {
        return this.dataBase.find(p => p.id === id) as Sale;
    }

    create(Sale: Sale): Sale {
        this.dataBase.push(Sale);
        return Sale;
    }

    update(Sale: Sale): Sale {
        const index = this.dataBase.findIndex(p => p.id === Sale.id);
        this.dataBase[index] = Sale
        return Sale;
    }

    delete(id: string): void {
        const newArray = this.dataBase.filter(p => p.id !== id);
        this.dataBase = newArray;
    }

}