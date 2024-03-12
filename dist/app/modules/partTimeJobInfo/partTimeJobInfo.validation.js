"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeJobInfoValidation = void 0;
const zod_1 = require("zod");
const createPartTimeJobInfoZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        hasPartTimeJob: zod_1.z.boolean({
            required_error: 'hasPartTimeJob is required',
        }),
        startTime: zod_1.z.string({
            required_error: 'Start time is required',
        }),
        endTime: zod_1.z.string({
            required_error: 'End time is required',
        }),
    }),
});
exports.PartTimeJobInfoValidation = {
    createPartTimeJobInfoZodSchema,
};
