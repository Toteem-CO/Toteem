import axios from 'axios';
import callsites from 'callsites';

import { __Config } from './config/index.js';

export default {
  async error(msg) {
    return this._log(msg, __Config.LOG_LEVEL_ERROR, __Config.COLOR_ERROR);
  },

  async warn(msg) {
    return this._log(msg, __Config.LOG_LEVEL_WARN, __Config.COLOR_WARN);
  },

  async info(msg) {
    return this._log(msg, __Config.LOG_LEVEL_INFO, __Config.COLOR_INFO);
  },

  async _log(msg, level, color) {
    const callsiteIndex = 2;
    const splitToken = '/packages';
    const currentCallsites = callsites();
    const fileName = currentCallsites[callsiteIndex].getFileName().split(splitToken).pop();
    const line = currentCallsites[callsiteIndex].getLineNumber();
    const uncoloredMessage = `${msg} [File: ${fileName}, Line: ${line}]`;
    let finalMessage = uncoloredMessage;

    if (__Config.COLOR_ENABLED) {
      finalMessage = `${color}${finalMessage}${__Config.COLOR_RESET}`;
    }

    if (level === __Config.LOG_LEVEL_ERROR) {
      console.error(uncoloredMessage); // eslint-disable-line no-console
      await this._postErrorOnSlack();
    } else {
      console.log(finalMessage); // eslint-disable-line no-console
    }

    return finalMessage;
  },

  async _postErrorOnSlack(msg) {
    try {
      if (__Config.ERROR_SLACK_WEBHOOK) {
        await axios.post(__Config.ERROR_SLACK_WEBHOOK, { text: msg });
      }
    } catch (e) {
      console.error(`[Logger Itself] :: ERROR :: Unable To Post On Slack :: ${e.message}`); // eslint-disable-line
    }
  },
};
