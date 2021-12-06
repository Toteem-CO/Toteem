const { logColors } = require('../config');
const { errorsLevels } = require('../config/const');

function getColor(level) {
  switch (level) {
    case errorsLevels.error:
      return logColors.error;
    case errorsLevels.warn:
      return logColors.warn;
    case errorsLevels.debug:
      return logColors.debug;
    case errorsLevels.info:
      return logColors.info;
    case errorsLevels.success:
      return logColors.success;
    default:
      return logColors.log;
  }
}

function testDatas(message, level, formattedTime) {
  let testedMessage = message;
  let testedLevel = level;
  let testedTime = formattedTime;

  if (testedMessage === '') {
    testedMessage = 'Empty Message';
  }
  if (typeof testedMessage === 'object') {
    testedMessage = JSON.stringify(testedMessage);
  }
  if (testedLevel > errorsLevels.log || testedLevel < errorsLevels.error) {
    testedLevel = errorsLevels.log;
  }
  if (!testedTime) {
    testedTime = new Date();
  }

  return {
    testedMessage,
    testedLevel,
    testedTime,
  };
}

module.exports = { getColor, testDatas };
