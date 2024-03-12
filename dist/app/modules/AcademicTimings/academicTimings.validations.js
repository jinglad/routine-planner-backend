"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicTimingsValidation = void 0;
const zod_1 = require("zod");
const createAcademicTimingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        subject: zod_1.z.string({
            required_error: 'Subject is required',
        }),
        day: zod_1.z.string({
            required_error: 'Day is required',
        }),
        startTime: zod_1.z.string({
            required_error: 'Start time is required',
        }),
        endTime: zod_1.z.string({
            required_error: 'End time is required',
        }),
    }),
});
exports.AcademicTimingsValidation = {
    createAcademicTimingZodSchema,
};
