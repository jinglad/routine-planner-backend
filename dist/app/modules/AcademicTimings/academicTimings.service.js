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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicTimingsService = void 0;
const academicTiming_model_1 = require("./academicTiming.model");
const addAcademicTimings = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicTiming_model_1.AcademicTimings.create(payload);
    return result;
});
const getAcademicTimings = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicTiming_model_1.AcademicTimings.find({ user: userId });
    return result;
});
exports.AcademicTimingsService = {
    addAcademicTimings,
    getAcademicTimings,
};
