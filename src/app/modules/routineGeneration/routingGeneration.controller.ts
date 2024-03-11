import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { RoutineGenerationService } from './routineGeneration.service';

const generateRoutine = catchAsync(async (req, res) => {
  const user: any = req.decoded;
  const result = await RoutineGenerationService.generateRoutine(
    user?.userId as string
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Routine generated successfully !',
    data: result,
  });
});

export const RoutineGenerationController = {
  generateRoutine,
};
