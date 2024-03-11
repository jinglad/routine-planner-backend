import { AcademicTimings } from './academicTiming.model';
import { IAcademicTimings } from './academicTimings.interface';

const addAcademicTimings = async (payload: IAcademicTimings) => {
  const result = await AcademicTimings.create(payload);
  return result;
};

const getAcademicTimings = async (userId: string) => {
  const result = await AcademicTimings.find({ user: userId });
  return result;
};

export const AcademicTimingsService = {
  addAcademicTimings,
  getAcademicTimings,
};
