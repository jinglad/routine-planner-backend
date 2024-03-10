import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicTimingsController } from './academicTimings.controller';
import { AcademicTimingsValidation } from './academicTimings.validations';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  validateRequest(AcademicTimingsValidation.createAcademicTimingZodSchema),
  AcademicTimingsController.addAcademicTimings
);

// router.get(
//   '/',
//   authMiddleware,
//   AcademicTimingsController
// );

export const AcademicTimingsRoute = router;
