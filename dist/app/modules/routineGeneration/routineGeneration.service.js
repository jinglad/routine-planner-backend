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
exports.RoutineGenerationService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const academicTimings_service_1 = require("../AcademicTimings/academicTimings.service");
const learningObjectives_service_1 = require("../learning-objectives/learningObjectives.service");
const partTimeJobInfo_service_1 = require("../partTimeJobInfo/partTimeJobInfo.service");
const routineGeneration_utils_1 = require("./routineGeneration.utils");
const generateRoutine = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const learningObjectives = yield learningObjectives_service_1.LearningObjectiveService.getLearningObjectives(userId);
    const academicTimings = yield academicTimings_service_1.AcademicTimingsService.getAcademicTimings(userId);
    const partTimeJobInfo = yield partTimeJobInfo_service_1.PartTimeJobInfoService.getPartTimeJobInfo(userId);
    const mainRoutine = [];
    // make routine for next 5 days
    for (let i = 0; i < 5; i++) {
        const totalStudyTime = 16; // 16 hours per day for study time (8 hours for sleep) - can be changed based on user's preference
        let availableTime = totalStudyTime;
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        const availableAcademicTimings = (0, routineGeneration_utils_1.filterAvailableAcademicTimings)(academicTimings, currentDate.toISOString());
        const totalAcademicTime = availableAcademicTimings === null || availableAcademicTimings === void 0 ? void 0 : availableAcademicTimings.map(timing => {
            return (0, routineGeneration_utils_1.calculateTimeDifference)(timing.startTime, timing.endTime);
        }).reduce((acc, curr) => acc + curr, 0);
        const totalAcademicTimeInHours = totalAcademicTime / 60;
        availableTime -= totalAcademicTimeInHours || 0;
        const totalTimeForPartTimeJob = (0, routineGeneration_utils_1.calculateTimeDifference)(partTimeJobInfo === null || partTimeJobInfo === void 0 ? void 0 : partTimeJobInfo.startTime, partTimeJobInfo === null || partTimeJobInfo === void 0 ? void 0 : partTimeJobInfo.endTime);
        const totalTimeForPartTimeJobInHours = totalTimeForPartTimeJob / 60;
        availableTime -= totalTimeForPartTimeJobInHours || 0;
        // Prioritize learning objectives based on priority
        const prioritizedLearningObjectives = (0, routineGeneration_utils_1.prioritizeLearningObjectives)(learningObjectives);
        // Allocate study time for learning objectives
        const learningObjectiveStudySessions = (0, routineGeneration_utils_1.allocateStudyTime)(prioritizedLearningObjectives, availableTime);
        // // Allocate study time for academic timings
        const academicTimingsStudySessions = (0, routineGeneration_utils_1.allocateAcademicTimingsStudyTime)(availableAcademicTimings);
        // // Allocate study time for part-time job
        const partTimeJobStudySession = (0, routineGeneration_utils_1.allocatePartTimeJobTime)(partTimeJobInfo, totalTimeForPartTimeJobInHours);
        // Combine study sessions into the routine
        const routine = {
            date: currentDate.toISOString(),
            learningObjectives: learningObjectiveStudySessions,
            academicTimings: academicTimingsStudySessions,
            partTimeJobInfo: partTimeJobStudySession,
        };
        mainRoutine.push(routine);
    }
    return mainRoutine;
});
exports.RoutineGenerationService = {
    generateRoutine,
};
