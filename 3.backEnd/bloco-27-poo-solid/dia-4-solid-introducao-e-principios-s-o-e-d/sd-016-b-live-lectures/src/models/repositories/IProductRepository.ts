import Product from "../entities/Product";

export default interface IProductRepository {
    create(product: Product): Promise<Product>;
    update(product: Product): Promise<Product>;
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product>;
}