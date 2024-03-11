import { Model, Types } from 'mongoose';

export type IPartTimeJobInfo = {
  _id: string;
  hasPartTimeJob: boolean;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
};

export type PartTimeJobInfoModel = Model<
  IPartTimeJobInfo,
  Record<string, unknown>
>;
