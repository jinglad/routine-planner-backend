import { z } from 'zod';

const createPartTimeJobInfoZodSchema = z.object({
  body: z.object({
    hasPartTimeJob: z.boolean({
      required_error: 'hasPartTimeJob is required',
    }),
    startTime: z.string({
      required_error: 'Start time is required',
    }),
    endTime: z.string({
      required_error: 'End time is required',
    }),
  }),
});

export const PartTimeJobInfoValidation = {
  createPartTimeJobInfoZodSchema,
};
