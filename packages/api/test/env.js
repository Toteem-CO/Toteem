const path = require('path');

if (!process.env.HEROKU_CI) {
  const loadedEnv = require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') });

  if (loadedEnv.error) {
    console.error(loadedEnv.error);
    process.exit(1);
  }
}
