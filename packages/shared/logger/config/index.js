const { colors } = require('./const');

module.exports = {
  slackWebhook: process.env.SLACK_WEBHOOK,
  logColors: {
    reset: '\x1b[0m',
    error: colors.red,
    warn: colors.yellow,
    debug: colors.magenta,
    info: colors.cyan,
    success: colors.green,
    log: colors.white,
  },
  logParameters: {
    colorEnabled: process.env.LOGGER_COLOR_ENABLED,
    dateEnabled: process.env.LOGGER_DATE_ENABLED,
  },
};
