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
exports.LearningObjectiveController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const learningObjectives_service_1 = require("./learningObjectives.service");
const createLearningObjective = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.decoded;
    const learningObj = Object.assign(Object.assign({}, req.body), { user: user === null || user === void 0 ? void 0 : user.userId });
    const result = yield learningObjectives_service_1.LearningObjectiveService.createLearningObjective(learningObj);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Learning Objective created successfully !',
        data: result,
    });
}));
const getLearningObjectives = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.decoded;
    const result = yield learningObjectives_service_1.LearningObjectiveService.getLearningObjectives(user === null || user === void 0 ? void 0 : user.userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Learning Objectives fetched successfully !',
        data: result,
    });
}));
exports.LearningObjectiveController = {
    createLearningObjective,
    getLearningObjectives,
};
