export const __Config = {
  // From Env
  ERROR_SLACK_WEBHOOK: process.env.ERROR_SLACK_WEBHOOK,
  COLOR_ENABLED: process.env.LOGGER_COLOR_ENABLED,
  DATE_ENABLED: process.env.LOGGER_DATE_ENABLED,
  // From Constants
  COLOR_RESET: '\x1b[0m',
  COLOR_ERROR: '\x1b[91m',
  COLOR_WARN: '\x1b[93m',
  COLOR_DEBUG: '\x1b[90m',
  COLOR_INFO: '\x1b[37m',
  COLOR_SUCCESS: '\x1b[92m',
  LOG_LEVEL_ERROR: 1,
  LOG_LEVEL_WARN: 2,
  LOG_LEVEL_DEBUG: 3,
  LOG_LEVEL_INFO: 4,
  LOG_LEVEL_SUCCESS: 5,
};
