import ApiError from '../../../errors/ApiError';
import { ILearningObjective } from './learningObjectives.interface';
import { LearningObjective } from './learningObjectives.model';

const createLearningObjective = async (
  learningObjective: ILearningObjective
): Promise<ILearningObjective | null> => {
  const isSubjectExist = await LearningObjective.findOne({
    subject: learningObjective.subject,
    user: learningObjective.user,
  });

  if (isSubjectExist) {
    throw new ApiError(400, 'Learning Objective already exist');
  }

  const result = (await LearningObjective.create(learningObjective)).populate(
    'user'
  );
  return result;
};

const getLearningObjectives = async (
  userId: string
): Promise<ILearningObjective[]> => {
  const result = await LearningObjective.find({ user: userId });
  return result;
};

export const LearningObjectiveService = {
  createLearningObjective,
  getLearningObjectives,
};
