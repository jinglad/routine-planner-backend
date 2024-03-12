"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeJobInfoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const partTimeJobInfo_controller_1 = require("./partTimeJobInfo.controller");
const partTimeJobInfo_validation_1 = require("./partTimeJobInfo.validation");
const router = express_1.default.Router();
router.post('/', auth_1.authMiddleware, (0, validateRequest_1.default)(partTimeJobInfo_validation_1.PartTimeJobInfoValidation.createPartTimeJobInfoZodSchema), partTimeJobInfo_controller_1.PartTimeJobInfoController.addPartTimeJobInfo);
router.get('/', auth_1.authMiddleware, partTimeJobInfo_controller_1.PartTimeJobInfoController.getPartTimeJobInfo);
exports.PartTimeJobInfoRoutes = router;
