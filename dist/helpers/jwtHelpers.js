"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHelpers = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload, secret, expireTime) => {
    return jsonwebtoken_1.default.sign(payload, secret, {
        expiresIn: expireTime,
    });
};
const verifyToken = (token, secret) => {
    return jsonwebtoken_1.default.verify(token, secret);
};
const getExpiryDate = (token, _expireTime) => {
    const { exp } = jsonwebtoken_1.default.decode(token);
    return new Date(exp * 1000).toISOString();
};
exports.jwtHelpers = {
    createToken,
    verifyToken,
    getExpiryDate,
};
