"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicTimingsRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicTimings_controller_1 = require("./academicTimings.controller");
const academicTimings_validations_1 = require("./academicTimings.validations");
const router = express_1.default.Router();
router.post('/', auth_1.authMiddleware, (0, validateRequest_1.default)(academicTimings_validations_1.AcademicTimingsValidation.createAcademicTimingZodSchema), academicTimings_controller_1.AcademicTimingsController.addAcademicTimings);
router.get('/', auth_1.authMiddleware, academicTimings_controller_1.AcademicTimingsController.getAcademicTimings);
exports.AcademicTimingsRoute = router;
