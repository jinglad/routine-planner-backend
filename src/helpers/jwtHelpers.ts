/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

const getExpiryDate = (token: string, _expireTime: string): string => {
  const { exp } = jwt.decode(token) as JwtPayload;
  return new Date(exp! * 1000).toISOString();
};

export const jwtHelpers = {
  createToken,
  verifyToken,
  getExpiryDate,
};
