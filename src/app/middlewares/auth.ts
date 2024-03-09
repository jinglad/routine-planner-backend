import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(' ')[1]
    : null;
  if (!token) {
    res.status(401).send({ error: 'Unauthorized' });
  } else {
    jwt.verify(token, config.jwt?.secret || '', (err, decoded) => {
      if (err) {
        res.status(403).send({ message: 'forbidden access', error: err });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};
