import { z } from 'zod';

const createLearningObjectiveZodSchema = z.object({
  body: z.object({
    subject: z.string({
      required_error: 'Subject is required',
    }),
    priority: z.number({
      required_error: 'Priority is required',
    }),
  }),
});

export const LearningObjectiveValidation = {
  createLearningObjectiveZodSchema,
};
