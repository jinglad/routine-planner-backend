import { Model, Types } from 'mongoose';

export type IAcademicTimings = {
  subject: string;
  day: string;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
};

export type AcademicTimingsModel = Model<
  IAcademicTimings,
  Record<string, unknown>
>;
