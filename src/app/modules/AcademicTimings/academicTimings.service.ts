import { AcademicTimings } from './academicTiming.model';
import { IAcademicTimings } from './academicTimings.interface';

const addAcademicTimings = async (payload: IAcademicTimings) => {
  const result = await AcademicTimings.create(payload);
  return result;
};

export const AcademicTimingsService = {
  addAcademicTimings,
};
