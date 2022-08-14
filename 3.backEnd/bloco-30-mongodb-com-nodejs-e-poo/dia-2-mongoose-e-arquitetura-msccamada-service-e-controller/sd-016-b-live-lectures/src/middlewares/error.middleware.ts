import { Error } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/custom.error';

export default function errorMiddleware(err: unknown, req: Request, res: Response, next: NextFunction) {
    //se for um erro derivado do custom error
    //eu posso pegar o status code do erro e retornar
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    //se for um error de validação do mongoose
    //posso retornar 400 e a mensagem do erro
    if(err instanceof Error.ValidationError) {
        return res.status(400).json({ message: err.message });
    }
    //se for um erro desconhecido, retorno 500 e mostro no log para acompanhamento da equipe de dev
    console.log(err);
    return res.status(500).json({ message: 'internal error' });
}