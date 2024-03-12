import { IAcademicTimings } from '../AcademicTimings/academicTimings.interface';
import { ILearningObjective } from '../learning-objectives/learningObjectives.interface';
import { IPartTimeJobInfo } from '../partTimeJobInfo/partTimeJobInfo.interface';

export type IRoutineGeneration = {
  date: string;
  academicTimings: {
    item: IAcademicTimings;
    sessionDuration: number;
  }[];
  learningObjectives: {
    item: ILearningObjective;
    sessionDuration: number;
  }[];
  partTimeJobInfo: {
    item: IPartTimeJobInfo;
    sessionDuration: number;
  } | null;
};
