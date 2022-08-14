import Product from "../models/entities/Product";
import IProductRepository from "../models/repositories/IProductRepository";

export default class ProductService {
    private _productRepository: IProductRepository;

    constructor(productRepository: IProductRepository) {
        this._productRepository = productRepository;
    }

    async create(name: string, price: number, quantity: number): Promise<Product> {
        const product = new Product(name, price, quantity);
        const productCreated = await this._productRepository.create(product);
        return productCreated;
    }

    async getAll(): Promise<Array<Product>> {
        return await this._productRepository.getAll();
    }

    async getById(id: string): Promise<Product> {
        return await this._productRepository.getById(id);
    }

}