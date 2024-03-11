import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IPartTimeJobInfo } from './partTimeJobInfo.interface';
import { PartTimeJobInfoService } from './partTimeJobInfo.service';

const addPartTimeJobInfo = catchAsync(async (req: Request, res: Response) => {
  const user: any = req.decoded;
  const result = await PartTimeJobInfoService.addPartTimeJobInfo({
    ...req.body,
    user: user?.userId,
  });
  sendResponse<IPartTimeJobInfo>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Part Time Job Info added successfully !',
    data: result,
  });
});

const getPartTimeJobInfo = catchAsync(async (req: Request, res: Response) => {
  const user: any = req.decoded;
  const result = await PartTimeJobInfoService.getPartTimeJobInfo(user?.userId);
  sendResponse<IPartTimeJobInfo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Part Time Job Info fetched successfully !',
    data: result,
  });
});

export const PartTimeJobInfoController = {
  addPartTimeJobInfo,
  getPartTimeJobInfo,
};
