import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { LearningObjectiveController } from './learningObjectives.controller';
import { LearningObjectiveValidation } from './learningObjectives.validation';

const router = express.Router();

router.post(
  '/',
  authMiddleware,
  validateRequest(LearningObjectiveValidation.createLearningObjectiveZodSchema),
  LearningObjectiveController.createLearningObjective
);

router.get(
  '/',
  authMiddleware,
  LearningObjectiveController.getLearningObjectives
);

export const LearningObjectiveRoute = router;
