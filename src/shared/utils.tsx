import moment, { Moment } from 'moment';

export const formatDate = (date: Date) => {
  return date ? moment(date).format('DD-MMM-YY') : '';
};

export const formatTime = (time: Date) => {
  return time ? moment(time, "HHmm").format('hh:mm A') : '';
};
