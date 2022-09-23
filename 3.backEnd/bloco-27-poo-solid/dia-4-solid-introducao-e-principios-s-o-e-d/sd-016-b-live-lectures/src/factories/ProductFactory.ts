import connection from "../models/connection";
import ProductMysqlRepository from "../models/repositories/ProductMysqlRepository";
import ProductRepository from "../models/repositories/ProductRepository";
import ProductService from "../services/ProductService";

export default class ProductFactory {
    public static create(){
        //substituimos o repositorio em memoria por outro com mysql
        //const productRepository = new ProductRepository();
        const productRepository = new ProductMysqlRepository(connection);
        const productService = new ProductService(productRepository);
        return productService;
    } 
}