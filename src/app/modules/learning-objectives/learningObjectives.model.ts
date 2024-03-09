import { Schema, model } from 'mongoose';
import {
  ILearningObjective,
  LearningObjectiveModel,
} from './learningObjectives.interface';

const LearningObjectiveSchema = new Schema<
  ILearningObjective,
  LearningObjectiveModel
>(
  {
    subject: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
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

export const LearningObjective = model<
  ILearningObjective,
  LearningObjectiveModel
>('LearningObjective', LearningObjectiveSchema);
