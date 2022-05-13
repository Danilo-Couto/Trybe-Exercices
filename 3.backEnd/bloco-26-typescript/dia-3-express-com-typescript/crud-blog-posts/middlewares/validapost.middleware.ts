 import { NextFunction, Request, Response } from 'express';
 import JOI from 'joi';
import { takeCoverage } from 'v8';
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

  const tacObj = {
    title: JOI.string().not().empty().required(),
    author: JOI.string().min(3).not().empty().required(),
    category: JOI.string().min(3).not().empty().required()
  }

const schemeEdit = JOI.object(tacObj);

const schemeCreate = JOI.object(
  {...tacObj, publicationDate: JOI.date().required() }
);

export const validaPostCreate = (req: Request, _res: Response, next: NextFunction) => {
  const { title, author, category, publicationDate } = req.body;
  const { error } = schemeCreate.validate({ title, author, category, publicationDate});
  if (error) throw error;
  next();
};

export const validaPostEdit = (req: Request, _res: Response, next: NextFunction) => {
  const { title, author, category } = req.body;
  const { error } = schemeEdit.validate({ title, author, category});
  if (error) throw error;
  next();
};