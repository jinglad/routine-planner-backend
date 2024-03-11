import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PartTimeJobInfoController } from './partTimeJobInfo.controller';
import { PartTimeJobInfoValidation } from './partTimeJobInfo.validation';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  validateRequest(PartTimeJobInfoValidation.createPartTimeJobInfoZodSchema),
  PartTimeJobInfoController.addPartTimeJobInfo
);

router.get('/', authMiddleware, PartTimeJobInfoController.getPartTimeJobInfo);

export const PartTimeJobInfoRoutes = router;
