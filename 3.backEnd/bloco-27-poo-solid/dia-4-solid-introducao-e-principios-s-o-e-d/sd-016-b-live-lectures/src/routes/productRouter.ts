import { Request, Response, Router } from "express";
// import ProductFactory from "../factories/ProductFactory";
import connection from "../models/connection";
import ProductMysqlRepository from "../models/repositories/ProductMysqlRepository";
import ProductService from "../services/ProductService";

const productRouter = Router();

// const productService = ProductFactory.create();
const productRepository = new ProductMysqlRepository(connection);
const productService = new ProductService(productRepository);

productRouter.get('/products/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await productService.getById(id);
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'algo de errado aconteceu'});
    }
});

productRouter.get('/products/', async (req: Request, res: Response) => {
    try {
        const products = await productService.getAll();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'algo de errado aconteceu'});
    }
});

productRouter.post('/products/', async (req: Request, res: Response) => {
    try {
        const { name, price, quantity } = req.body;
        const productCreated = await productService.create(name, price, quantity);
        return res.status(201).json(productCreated);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'algo de errado aconteceu'});
    }
});

// productRouter.put('/products/:id', (req: Request, res: Response) => {

// });

// productRouter.delete('/products/:id', (req: Request, res: Response) => {

// });

export default productRouter;