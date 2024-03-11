/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { AcademicTimingsService } from '../AcademicTimings/academicTimings.service';
import { LearningObjectiveService } from '../learning-objectives/learningObjectives.service';
import { PartTimeJobInfoService } from '../partTimeJobInfo/partTimeJobInfo.service';
import {
  allocateAcademicTimingsStudyTime,
  allocatePartTimeJobTime,
  allocateStudyTime,
  calculateTimeDifference,
  filterAvailableAcademicTimings,
  prioritizeLearningObjectives,
} from './routineGeneration.utils';

const generateRoutine = async (userId: string) => {
  const learningObjectives =
    await LearningObjectiveService.getLearningObjectives(userId);
  const academicTimings = await AcademicTimingsService.getAcademicTimings(
    userId
  );
  const partTimeJobInfo = await PartTimeJobInfoService.getPartTimeJobInfo(
    userId
  );

  // console.log({
  //   learningObjectives,
  //   academicTimings,
  //   partTimeJobInfo,
  // });

  const totalStudyTime = 16; // 16 hours per day for study time (8 hours for sleep) - can be changed based on user's preference
  let availableTime = totalStudyTime;

  const availableAcademicTimings =
    filterAvailableAcademicTimings(academicTimings);

  const totalAcademicTime = availableAcademicTimings
    ?.map(timing => {
      return calculateTimeDifference(timing.startTime, timing.endTime);
    })
    .reduce((acc, curr) => acc + curr, 0);

  const totalAcademicTimeInHours = totalAcademicTime / 60;

  availableTime -= totalAcademicTimeInHours || 0;

  const totalTimeForPartTimeJob = calculateTimeDifference(
    partTimeJobInfo?.startTime as string,
    partTimeJobInfo?.endTime as string
  );

  const totalTimeForPartTimeJobInHours = totalTimeForPartTimeJob / 60;

  availableTime -= totalTimeForPartTimeJobInHours || 0;

  // Prioritize learning objectives based on priority
  const prioritizedLearningObjectives =
    prioritizeLearningObjectives(learningObjectives);

  // Allocate study time for learning objectives
  const learningObjectiveStudySessions = allocateStudyTime(
    prioritizedLearningObjectives,
    availableTime
  );

  // // Allocate study time for academic timings
  const academicTimingsStudySessions = allocateAcademicTimingsStudyTime(
    availableAcademicTimings
  );

  // // Allocate study time for part-time job
  const partTimeJobStudySession = allocatePartTimeJobTime(
    partTimeJobInfo,
    totalTimeForPartTimeJobInHours
  );

  // Combine study sessions into the routine
  const routine = {
    learningObjectives: learningObjectiveStudySessions,
    academicTimings: academicTimingsStudySessions,
    partTimeJobInfo: partTimeJobStudySession,
  };

  return routine;
};

export const RoutineGenerationService = {
  generateRoutine,
};
