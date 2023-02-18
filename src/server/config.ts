const env = process.env;

export const PORT: number =
  (env.PORT as unknown as number) ?? 5000;
export const HOST = env.host ?? 'localhost';
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI =
  env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017';
export const DATABASE_NAME = env.DATABASE_NAME ?? 'local';

export default {
  PORT,
  HOST,
  SERVER_URL,
};
