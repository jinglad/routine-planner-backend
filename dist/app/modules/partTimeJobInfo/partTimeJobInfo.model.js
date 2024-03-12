"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeJobInfo = void 0;
const mongoose_1 = require("mongoose");
const PartTimeJobInfoSchema = new mongoose_1.Schema({
    hasPartTimeJob: {
        type: Boolean,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});
exports.PartTimeJobInfo = (0, mongoose_1.model)('PartTimeJobInfo', PartTimeJobInfoSchema);
