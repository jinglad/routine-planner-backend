export const formatTime = (inputTime: string) => {
  if (inputTime) {
    const time = inputTime.split(':');
    const hour = parseInt(time[0]);
    const minute = time[1];
    if (hour > 12) {
      return `${hour - 12}:${minute} PM`;
    } else {
      return `${hour}:${minute} AM`;
    }
  }
};
