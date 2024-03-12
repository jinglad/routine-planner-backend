"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicTimings_routes_1 = require("../modules/AcademicTimings/academicTimings.routes");
const auth_route_1 = require("../modules/auth/auth.route");
const learningObjectives_routes_1 = require("../modules/learning-objectives/learningObjectives.routes");
const partTimeJobInfo_routes_1 = require("../modules/partTimeJobInfo/partTimeJobInfo.routes");
const routineGeneration_routes_1 = require("../modules/routineGeneration/routineGeneration.routes");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/user',
        route: user_route_1.UserRoute,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/learning-objectives',
        route: learningObjectives_routes_1.LearningObjectiveRoute,
    },
    {
        path: '/academic-timings',
        route: academicTimings_routes_1.AcademicTimingsRoute,
    },
    {
        path: '/part-time-job-info',
        route: partTimeJobInfo_routes_1.PartTimeJobInfoRoutes,
    },
    {
        path: '/routine-generation',
        route: routineGeneration_routes_1.RoutineGenerationRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
