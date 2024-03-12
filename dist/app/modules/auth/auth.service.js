"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const _user_model_1 = require("../user/ user.model");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUserExist = yield _user_model_1.User.isUserExist(email);
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    if (isUserExist.password &&
        !(yield _user_model_1.User.isPasswordMatched(password, isUserExist.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    //create access token & refresh token
    const { id: userId, email: userEmail } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, userEmail }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ userId, userEmail }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    const accessTokenExpiry = jwtHelpers_1.jwtHelpers.getExpiryDate(accessToken, config_1.default.jwt.expires_in);
    const refreshTokenExpiry = jwtHelpers_1.jwtHelpers.getExpiryDate(refreshToken, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        accessTokenExpiry: accessTokenExpiry,
        refreshToken,
        refreshTokenExpiry: refreshTokenExpiry,
    };
});
exports.AuthService = {
    loginUser,
};
