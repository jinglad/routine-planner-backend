import { Schema, model } from 'mongoose';
import {
  IPartTimeJobInfo,
  PartTimeJobInfoModel,
} from './partTimeJobInfo.interface';

const PartTimeJobInfoSchema = new Schema<
  IPartTimeJobInfo,
  PartTimeJobInfoModel
>(
  {
    hasPartTimeJob: {
      type: Boolean,
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

export const PartTimeJobInfo = model<IPartTimeJobInfo, PartTimeJobInfoModel>(
  'PartTimeJobInfo',
  PartTimeJobInfoSchema
);
