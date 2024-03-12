"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = void 0;
const formatTime = (inputTime) => {
    if (inputTime) {
        const time = inputTime.split(':');
        const hour = parseInt(time[0]);
        const minute = time[1];
        if (hour > 12) {
            return `${hour - 12}:${minute} PM`;
        }
        else {
            return `${hour}:${minute} AM`;
        }
    }
};
exports.formatTime = formatTime;
