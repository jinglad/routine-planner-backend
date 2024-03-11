import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicTimingsService } from './academicTimings.service';

const addAcademicTimings = catchAsync(async (req: Request, res: Response) => {
  const user: any = req.decoded;
  const result = await AcademicTimingsService.addAcademicTimings({
    ...req.body,
    user: user?.userId,
  });
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic Timings added successfully !',
    data: result,
  });
});

const getAcademicTimings = catchAsync(async (req: Request, res: Response) => {
  const user: any = req.decoded;
  const result = await AcademicTimingsService.getAcademicTimings(user?.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Timings fetched successfully !',
    data: result,
  });
});

export const AcademicTimingsController = {
  addAcademicTimings,
  getAcademicTimings,
};
