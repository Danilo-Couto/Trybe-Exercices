 import { NextFunction, Request, Response } from 'express';
 import JOI from 'joi';
// import { StatusCodes } from 'http-status-codes';
// import Post from '../interface/post.interface';

/* 
Regras:
Um post deve possuir as propriedades id, título, nome do autor, nome da categoria e data de criação;
Nenhuma propriedade de um post pode ser nula ou vazia;
O nome do autor deve possuir pelo menos 3 caracteres;
O nome da categoria deve possuir pelo menos 3 caracteres;
A query param de data de criação deve ser no formato: aaaa-mm-dd;
 */

const scheme = JOI.object({
  title: JOI.string().not().empty().required(),
  author: JOI.string().min(3).not().empty().required(),
  category: JOI.string().min(3).not().empty().required(),
  publicationDate: JOI.date().required(),
});

export const validaPost = (req: Request, _res: Response, next: NextFunction) => {
  const { title, author, category, publicationDate } = req.body;
  const { error } = scheme.validate({ title, author, category, publicationDate});
  if (error) throw error;
  next();
};
