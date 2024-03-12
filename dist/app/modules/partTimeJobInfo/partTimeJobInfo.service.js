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
exports.PartTimeJobInfoService = void 0;
const partTimeJobInfo_model_1 = require("./partTimeJobInfo.model");
const addPartTimeJobInfo = (partTimeJobInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield partTimeJobInfo_model_1.PartTimeJobInfo.findOne({ user: partTimeJobInfo.user });
    if (isExist) {
        const result = yield partTimeJobInfo_model_1.PartTimeJobInfo.findOneAndUpdate({ user: partTimeJobInfo.user }, partTimeJobInfo, { new: true });
        return result;
    }
    const result = yield partTimeJobInfo_model_1.PartTimeJobInfo.create(partTimeJobInfo);
    return result;
});
const getPartTimeJobInfo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield partTimeJobInfo_model_1.PartTimeJobInfo.findOne({ user: userId });
    return result;
});
exports.PartTimeJobInfoService = {
    addPartTimeJobInfo,
    getPartTimeJobInfo,
};
