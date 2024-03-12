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
exports.LearningObjectiveService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const learningObjectives_model_1 = require("./learningObjectives.model");
const createLearningObjective = (learningObjective) => __awaiter(void 0, void 0, void 0, function* () {
    const isSubjectExist = yield learningObjectives_model_1.LearningObjective.findOne({
        subject: learningObjective.subject,
        user: learningObjective.user,
    });
    if (isSubjectExist) {
        throw new ApiError_1.default(400, 'Learning Objective already exist');
    }
    const result = (yield learningObjectives_model_1.LearningObjective.create(learningObjective)).populate('user');
    return result;
});
const getLearningObjectives = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield learningObjectives_model_1.LearningObjective.find({ user: userId });
    return result;
});
exports.LearningObjectiveService = {
    createLearningObjective,
    getLearningObjectives,
};
