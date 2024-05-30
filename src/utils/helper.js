function compareTime(timeStringOne, timeStringTwo) {
  let dateTime1 = new Date(timeStringOne);
  let dateTime2 = new Date(timeStringTwo);
  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
  compareTime,
};
