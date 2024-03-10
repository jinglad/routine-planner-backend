import { Schema, model } from 'mongoose';
import {
  AcademicTimingsModel,
  IAcademicTimings,
} from './academicTimings.interface';

const AcademicTimingsSchema = new Schema<
  IAcademicTimings,
  AcademicTimingsModel
>(
  {
    subject: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicTimings = model<IAcademicTimings, AcademicTimingsModel>(
  'AcademicTimings',
  AcademicTimingsSchema
);
