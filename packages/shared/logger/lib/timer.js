/*
  Timer is part of a reusable brick, it can be used in every projects.
  It's a timer to get a formatted Date.
  To use it properly, the function you need to call on your files is :
    getFormattedTime() --> it return a formatted string time.

  You can configure the format line 22.
*/
// Return the correct way to print UTC.
function timeZone(offsetParam) {
  const posOffest = 600;
  const negOffest = -600;
  const seconds = 60;
  let offset = offsetParam;

  if (offset >= posOffest) {
    offset = 'UTC-' + offset / seconds + ':00';
  } else if (offset >= 0) {
    offset = 'UTC-0' + offset / seconds + ':00';
  } else if (offset <= -negOffest) {
    offset = (offset / seconds).toString().replace('-' || '+', '');
    offset = 'UTC+' + offset + ':00';
  } else {
    offset = (offset / seconds).toString().replace('-' || '+', '');
    offset = 'UTC+0' + offset + ':00';
  }
  return offset;
}
// Function to format time
function getFormattedTime() {
  const date = new Date();
  const digits = -2;
  const monthPlus = 1;
  let offset = date.getTimezoneOffset();

  offset = timeZone(offset);
  const ms = date.getMilliseconds();
  const year = date.getFullYear();
  const month = ('0' + date.getMonth()).substr(digits);
  const day = ('0' + date.getDate() + monthPlus).substr(digits);
  const hours = ('0' + date.getHours()).substr(digits);
  const minutes = ('0' + date.getMinutes()).substr(digits);
  const seconds = ('0' + date.getSeconds()).substr(digits);

  return `[${year}/${month}/${day} | ${hours}:${minutes}:${seconds}:${ms} ${offset}]`;
}

module.exports = {
  getFormattedTime,
};
