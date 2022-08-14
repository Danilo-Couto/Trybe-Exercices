import { Request, Response, NextFunction } from 'express';

export default interface IMovieController {
    create(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    findAll(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    findById(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    updateById(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    deleteById(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}