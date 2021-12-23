export const __Config = {
  PORT: parseInt(process.env.PORT, 10),
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  BCRYPT_COST: parseInt(process.env.BCRYPT_COST, 10),
  JSONWEBTOKEN_SECRET: process.env.JSONWEBTOKEN_SECRET,
  JSONWEBTOKEN_DURATION_IN_DAYS: parseInt(process.env.JSONWEBTOKEN_DURATION_IN_DAYS, 10),
};
