"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearningObjective = void 0;
const mongoose_1 = require("mongoose");
const LearningObjectiveSchema = new mongoose_1.Schema({
    subject: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
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
exports.LearningObjective = (0, mongoose_1.model)('LearningObjective', LearningObjectiveSchema);
