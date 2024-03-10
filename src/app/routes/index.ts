import express from 'express';
import { AcademicTimingsRoute } from '../modules/AcademicTimings/academicTimings.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { LearningObjectiveRoute } from '../modules/learning-objectives/learningObjectives.routes';
import { UserRoute } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/learning-objectives',
    route: LearningObjectiveRoute,
  },
  {
    path: '/academic-timings',
    route: AcademicTimingsRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
