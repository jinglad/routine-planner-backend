import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicTimingsService } from './AcademicTimings.service';

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

export const AcademicTimingsController = {
  addAcademicTimings,
};
