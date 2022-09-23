import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

interface IsJoi {
  isJoi: boolean; statusCode: number; message: any; 
}

export default function errorMidleware (err: IsJoi, _req: Request, res: Response, next: NextFunction) {
  const { details } = err as any;

  if (err.isJoi) {
    res.status(400).json({ message: details[0].message });
  }

  console.error('erro:', err);

  return res.status(500).json({
    message: `Internal server error: ${err.message}`,
    });
    
};
