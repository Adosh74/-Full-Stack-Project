export const PORT: number =
  (process.env.PORT as unknown as number) ?? 5000;
export const HOST = process.env.HOST ?? 'localhost';

// export const PORT = 5000;
// export const HOST = 'localhost';

export const API_SERVER_URL = `http://${HOST}:${PORT}/api`;
