import express from 'express';
import os from 'node:os';
import config from './config';

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('dist'));

server.use('/', (req, res) => {
  res.render('index', {
    initialContent: 'Loading...',
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server listening at ${config.SERVER_URL}`,
    `\nfree Memory is: ${parseInt(
      (os.freemem() / 1024 / 1024) as unknown as string
    )} mb`
  );
});
