/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatTime } from '../../../shared/utils';
import { IAcademicTimings } from '../AcademicTimings/academicTimings.interface';
import { ILearningObjective } from '../learning-objectives/learningObjectives.interface';

export function calculateTotalStudyTime(
  learningObjectives: ILearningObjective[]
) {
  // Calculate the total study time based on the sum of learning objectives' priority values
  return learningObjectives.reduce(
    (totalTime, objective) => totalTime + objective.priority,
    0
  );
}

export function filterAvailableAcademicTimings(
  academicTimings: IAcademicTimings[],
  currentDate: string
) {
  const currentDay = new Date(currentDate).getDay(); // 0 for Sunday, 1 for Monday, etc.
  const currentTime = new Date(currentDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Filter academic timings for the current day
  const availableTimings = academicTimings.filter(
    timing => getDay(timing.day) === currentDay
  );

  // Filter out past timings for the current day
  const currentTimings = availableTimings.filter(timing =>
    isTimingValid(timing, currentTime)
  );

  return currentTimings;
}

const getDay = (day: string) => {
  const date = new Date(day);
  return date.getDay();
};

function isTimingValid(timing: any, currentTime: any) {
  // Check if the timing is not in the past
  const timingStart = convertTimeStringToMinutes(formatTime(timing.startTime));
  const currentMinutes = convertTimeStringToMinutes(currentTime);

  return timingStart >= currentMinutes;
}

function convertTimeStringToMinutes(timeString: any) {
  // Convert time string to minutes (e.g., '12:30' -> 750 minutes)
  const [hours, minutes] = timeString.split(':');
  return parseInt(hours) * 60 + parseInt(minutes);
}

export function prioritizeLearningObjectives(
  learningObjectives: ILearningObjective[]
) {
  // Prioritize learning objectives based on their priority values
  return learningObjectives.sort((a, b) => b.priority - a.priority);
}

export function allocateStudyTime(items: any[], totalStudyTime: any) {
  // Allocate study time for items based on their priority values
  const allocatedStudySessions = [];
  let remainingStudyTime = totalStudyTime;

  for (const item of items) {
    const sessionDuration = Math.ceil(
      (item.priority / totalStudyTime) * totalStudyTime
    );
    allocatedStudySessions.push({
      item,
      sessionDuration,
    });
    remainingStudyTime -= sessionDuration;
  }

  // Distribute remaining study time among the items
  allocatedStudySessions.forEach(session => {
    session.sessionDuration += Math.ceil(
      remainingStudyTime / allocatedStudySessions.length
    );
    remainingStudyTime -= Math.ceil(
      remainingStudyTime / allocatedStudySessions.length
    );
  });

  return allocatedStudySessions;
}

export function allocateAcademicTimingsStudyTime(academicTimings: any) {
  // Allocate study time for academic timings based on the total time
  return academicTimings.map((timing: any) => {
    return {
      item: timing,
      sessionDuration:
        calculateTimeDifference(timing.startTime, timing.endTime) / 60,
    };
  });
}

export function allocatePartTimeJobTime(
  partTimeJobInfo: any,
  totalTimeForPartTimeJob: any
) {
  // Allocate study time for part-time job based on the ideal time
  if (partTimeJobInfo && partTimeJobInfo.hasPartTimeJob) {
    return {
      item: partTimeJobInfo,
      sessionDuration: totalTimeForPartTimeJob,
    };
  }
  return null;
}

export function calculateTimeDifference(startTime: string, endTime: string) {
  // Calculate the time difference in minutes between start and end time
  const start: any = new Date(`1970-01-01T${startTime}:00Z`);
  const end: any = new Date(`1970-01-01T${endTime}:00Z`);
  return Math.abs(end - start) / 60000; // Convert milliseconds to minutes
}
