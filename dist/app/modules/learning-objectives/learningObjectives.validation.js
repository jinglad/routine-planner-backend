"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningObjectiveValidation = void 0;
const zod_1 = require("zod");
const createLearningObjectiveZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        subject: zod_1.z.string({
            required_error: 'Subject is required',
        }),
        priority: zod_1.z.number({
            required_error: 'Priority is required',
        }),
    }),
});
exports.LearningObjectiveValidation = {
    createLearningObjectiveZodSchema,
};
