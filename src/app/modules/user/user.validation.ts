import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6),
    name: z
      .string({
        required_error: 'Name is required',
      })
      .min(3),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
