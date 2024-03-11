import express from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { RoutineGenerationController } from './routingGeneration.controller';

const router = express.Router();

router.post('/', authMiddleware, RoutineGenerationController.generateRoutine);

export const RoutineGenerationRoutes = router;
