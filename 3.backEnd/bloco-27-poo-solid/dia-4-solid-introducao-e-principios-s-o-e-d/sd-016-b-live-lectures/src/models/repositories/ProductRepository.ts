import Product from "../entities/Product";
import IProductRepository from "./IProductRepository";

const fakeDataBase: Array<Product> = [];

export default class ProductRepository implements IProductRepository {
    constructor(private dataBase: Product[]) {
        this.dataBase = fakeDataBase;
    }

    async create(product: Product): Promise<Product> {
        this.dataBase.push(product);
        return product;
    }

    async update(product: Product): Promise<Product> {
        const index = this.dataBase.findIndex(p => p.id === product.id);
        this.dataBase[index] = product
        return product;
    }
    
    async getAll(): Promise<Product[]> {
        return this.dataBase;
    }

    async getById(id: string): Promise<Product> {
        return this.dataBase.find(p => p.id === id) as Product;
    }

}