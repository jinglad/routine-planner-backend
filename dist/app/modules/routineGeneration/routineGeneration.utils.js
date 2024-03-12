"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTimeDifference = exports.allocatePartTimeJobTime = exports.allocateAcademicTimingsStudyTime = exports.allocateStudyTime = exports.prioritizeLearningObjectives = exports.filterAvailableAcademicTimings = exports.calculateTotalStudyTime = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const utils_1 = require("../../../shared/utils");
function calculateTotalStudyTime(learningObjectives) {
    // Calculate the total study time based on the sum of learning objectives' priority values
    return learningObjectives.reduce((totalTime, objective) => totalTime + objective.priority, 0);
}
exports.calculateTotalStudyTime = calculateTotalStudyTime;
function filterAvailableAcademicTimings(academicTimings, currentDate) {
    const currentDay = new Date(currentDate).getDay(); // 0 for Sunday, 1 for Monday, etc.
    const currentTime = new Date(currentDate).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
    // Filter academic timings for the current day
    const availableTimings = academicTimings.filter(timing => getDay(timing.day) === currentDay);
    // Filter out past timings for the current day
    const currentTimings = availableTimings.filter(timing => isTimingValid(timing, currentTime));
    return currentTimings;
}
exports.filterAvailableAcademicTimings = filterAvailableAcademicTimings;
const getDay = (day) => {
    const date = new Date(day);
    return date.getDay();
};
function isTimingValid(timing, currentTime) {
    // Check if the timing is not in the past
    const timingStart = convertTimeStringToMinutes((0, utils_1.formatTime)(timing.startTime));
    const currentMinutes = convertTimeStringToMinutes(currentTime);
    return timingStart >= currentMinutes;
}
function convertTimeStringToMinutes(timeString) {
    // Convert time string to minutes (e.g., '12:30' -> 750 minutes)
    const [hours, minutes] = timeString.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
}
function prioritizeLearningObjectives(learningObjectives) {
    // Prioritize learning objectives based on their priority values
    return learningObjectives.sort((a, b) => b.priority - a.priority);
}
exports.prioritizeLearningObjectives = prioritizeLearningObjectives;
function allocateStudyTime(items, totalStudyTime) {
    // Allocate study time for items based on their priority values
    const allocatedStudySessions = [];
    let remainingStudyTime = totalStudyTime;
    for (const item of items) {
        const sessionDuration = Math.ceil((item.priority / totalStudyTime) * totalStudyTime);
        allocatedStudySessions.push({
            item,
            sessionDuration,
        });
        remainingStudyTime -= sessionDuration;
    }
    // Distribute remaining study time among the items
    allocatedStudySessions.forEach(session => {
        session.sessionDuration += Math.ceil(remainingStudyTime / allocatedStudySessions.length);
        remainingStudyTime -= Math.ceil(remainingStudyTime / allocatedStudySessions.length);
    });
    return allocatedStudySessions;
}
exports.allocateStudyTime = allocateStudyTime;
function allocateAcademicTimingsStudyTime(academicTimings) {
    // Allocate study time for academic timings based on the total time
    return academicTimings.map((timing) => {
        return {
            item: timing,
            sessionDuration: calculateTimeDifference(timing.startTime, timing.endTime) / 60,
        };
    });
}
exports.allocateAcademicTimingsStudyTime = allocateAcademicTimingsStudyTime;
function allocatePartTimeJobTime(partTimeJobInfo, totalTimeForPartTimeJob) {
    // Allocate study time for part-time job based on the ideal time
    if (partTimeJobInfo && partTimeJobInfo.hasPartTimeJob) {
        return {
            item: partTimeJobInfo,
            sessionDuration: totalTimeForPartTimeJob,
        };
    }
    return null;
}
exports.allocatePartTimeJobTime = allocatePartTimeJobTime;
function calculateTimeDifference(startTime, endTime) {
    // Calculate the time difference in minutes between start and end time
    const start = new Date(`1970-01-01T${startTime}:00Z`);
    const end = new Date(`1970-01-01T${endTime}:00Z`);
    return Math.abs(end - start) / 60000; // Convert milliseconds to minutes
}
exports.calculateTimeDifference = calculateTimeDifference;
