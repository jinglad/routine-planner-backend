import { z } from 'zod';

const createAcademicTimingZodSchema = z.object({
  body: z.object({
    subject: z.string({
      required_error: 'Subject is required',
    }),
    day: z.string({
      required_error: 'Day is required',
    }),
    startTime: z.string({
      required_error: 'Start time is required',
    }),
    endTime: z.string({
      required_error: 'End time is required',
    }),
  }),
});

export const AcademicTimingsValidation = {
  createAcademicTimingZodSchema,
};
