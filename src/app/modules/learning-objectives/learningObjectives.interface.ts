import { Model, Types } from 'mongoose';

export type ILearningObjective = {
  _id: string;
  subject: string;
  priority: number;
  user: Types.ObjectId;
};

export type LearningObjectiveModel = Model<
  ILearningObjective,
  Record<string, unknown>
>;
