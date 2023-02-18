export const PORT: number = process.env
  .PORT as unknown as number;
export const HOST = process.env.HOST;

export const API_SERVER_URL = `http://${HOST}:${PORT}/api`;
