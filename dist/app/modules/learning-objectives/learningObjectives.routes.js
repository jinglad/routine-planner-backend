"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningObjectiveRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const learningObjectives_controller_1 = require("./learningObjectives.controller");
const learningObjectives_validation_1 = require("./learningObjectives.validation");
const router = express_1.default.Router();
router.post('/', auth_1.authMiddleware, (0, validateRequest_1.default)(learningObjectives_validation_1.LearningObjectiveValidation.createLearningObjectiveZodSchema), learningObjectives_controller_1.LearningObjectiveController.createLearningObjective);
router.get('/', auth_1.authMiddleware, learningObjectives_controller_1.LearningObjectiveController.getLearningObjectives);
exports.LearningObjectiveRoute = router;
