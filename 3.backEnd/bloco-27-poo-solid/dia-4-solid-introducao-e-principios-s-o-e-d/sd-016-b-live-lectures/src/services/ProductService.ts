import Product from "../models/entities/Product";
import IProductRepository from "../models/repositories/IProductRepository";

export default class ProductService {
    constructor(private productRepository: IProductRepository) {
        this.productRepository = productRepository;
    }

    async create(name: string, price: number, quantity: number): Promise<Product> {
        const product = new Product(name, price, quantity);
        const productCreated = await this.productRepository.create(product);
        return productCreated;
    }

    async getAll(): Promise<Array<Product>> {
        return await this.productRepository.getAll();
    }

    async getById(id: string): Promise<Product> {
        return await this.productRepository.getById(id);
    }
}