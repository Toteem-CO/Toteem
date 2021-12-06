const axios = require('axios');

const { errorsLevels } = require('./config/const');
const { logColors, logParameters, slackWebhook } = require('./config');
const timer = require('./lib/timer');
const helper = require('./lib/helper');

async function generalLog(
  message = 'Empty Message',
  level = errorsLevels.log,
  callerFunc = 'Undefined Func',
  callerFile = 'Undefined File',
) {
  const formattedTime = logParameters.dateEnabled ? timer.getFormattedTime() : null;
  const data = helper.testDatas(message, level, formattedTime);
  const color = logParameters.colorEnabled ? helper.getColor(data.testedLevel) : null;
  let finalMessage = `${data.testedMessage} [Path : ${callerFile}] [Function : ${callerFunc}]`;

  if (logParameters.dateEnabled && data.testedTime) {
    finalMessage = `[${data.testedTime}]${finalMessage}`;
  }
  if (logParameters.colorEnabled && color) {
    finalMessage = `${color}${finalMessage}${logColors.reset}`;
  }

  return print(level, finalMessage, message);
}

async function print(level, coloredLog, message) {
  if (level !== errorsLevels.error) {
    console.log(coloredLog); // eslint-disable-line no-console
  } else {
    console.error(coloredLog); // eslint-disable-line no-console
    if (slackWebhook) {
      await postErrorOnSlack(message);
    }
  }
  return coloredLog;
}

async function postErrorOnSlack(message) {
  try {
    await axios.post(slackWebhook, { text: message });
  } catch (e) {
    console.error(`[LOGGER ITSELF] :: ERROR :: Unable To Post On Slack ${e}`); // eslint-disable-line no-console
  }
}

async function error(message) {
  return generalLog(message, errorsLevels.error, getCallerFunction(), getCallerFile());
}
async function warn(message) {
  return generalLog(message, errorsLevels.warn, getCallerFunction(), getCallerFile());
}
async function debug(message) {
  return generalLog(message, errorsLevels.debug, getCallerFunction(), getCallerFile());
}
async function info(message) {
  return generalLog(message, errorsLevels.info, getCallerFunction(), getCallerFile());
}
async function success(message) {
  return generalLog(message, errorsLevels.success, getCallerFunction(), getCallerFile());
}
async function log(message) {
  return generalLog(message, errorsLevels.log, getCallerFunction(), getCallerFile());
}

function extractFuncNameFromStack(stackExec) {
  const indexes = [1, 2];
  let index = null;

  if (stackExec) {
    index = indexes.find((i) => stackExec[i]);
    if (index != null) {
      return stackExec[index];
    }
  }
  return 'Undefined Func';
}

function getCallerFunction() {
  const error = new Error();
  const regex = /(\w+)@|at (\w+) \(/g;
  const stack = error.stack;
  const stackExec = regex.exec(stack);

  return extractFuncNameFromStack(stackExec);
}

function getCallerFile() {
  const slice = -3;
  const originalFunc = Error.prepareStackTrace;
  const err = new Error();
  let callerFile;

  Error.prepareStackTrace = function (err, stack) {
    return stack;
  };
  const currentFile = err.stack.shift().getFileName();

  while (err.stack.length) {
    callerFile = err.stack.shift().getFileName();
    if (currentFile !== callerFile) {
      break;
    }
  }
  Error.prepareStackTrace = originalFunc;
  callerFile = callerFile
    .split('\\' || '/')
    .slice(slice)
    .join('/');
  return callerFile;
}

module.exports = {
  error,
  warn,
  debug,
  info,
  success,
  log,
};
