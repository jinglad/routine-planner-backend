import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/registration',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

export const UserRoute = router;
