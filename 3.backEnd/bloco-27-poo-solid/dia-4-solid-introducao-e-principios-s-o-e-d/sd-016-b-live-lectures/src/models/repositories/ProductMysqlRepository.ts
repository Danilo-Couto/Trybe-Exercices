import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../entities/Product';
import IProductRepository from "./IProductRepository";

export default class ProductMysqlRepository implements IProductRepository {
    constructor(private connection: Pool) {
        this.connection = connection;
    }

    update(product: Product): Promise<Product> {
        throw new Error('Method not implemented.');
    }
    
    getById(id: string): Promise<Product> {
        throw new Error('Method not implemented.');
    }

    async getAll(): Promise<Product[]> {
        const [products] = await this.connection.execute('SELECT * FROM Products');
        return products as Array<Product>;
    }

    async create(product: Product): Promise<Product> {
        await this.connection
            .execute<ResultSetHeader>('INSERT INTO Products (_id, _name, _price, _quantity) VALUES (?, ?, ?, ?)',
            [product.id, product.name, product.price, product.quantity]);
        return product;
    }

}