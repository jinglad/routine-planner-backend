import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ILearningObjective } from './learningObjectives.interface';
import { LearningObjectiveService } from './learningObjectives.service';

const createLearningObjective = catchAsync(
  async (req: Request, res: Response) => {
    const user: any = req.decoded;
    console.log('user', user);
    console.log('req.body', req.body);
    const learningObj = {
      ...req.body,
      user: user?.userId,
    };

    const result = await LearningObjectiveService.createLearningObjective(
      learningObj
    );
    sendResponse<ILearningObjective>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Learning Objective created successfully !',
      data: result,
    });
  }
);

const getLearningObjectives = catchAsync(
  async (req: Request, res: Response) => {
    const user: any = req.decoded;
    const result = await LearningObjectiveService.getLearningObjectives(
      user?.userId
    );
    sendResponse<ILearningObjective[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Learning Objectives fetched successfully !',
      data: result,
    });
  }
);

export const LearningObjectiveController = {
  createLearningObjective,
  getLearningObjectives,
};
