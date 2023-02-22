import express from 'express';
import os from 'node:os';
import config from './config';
import ApiRouter from './api-router';
import serverRender from './render';

const server = express();

server.set('view engine', 'ejs');

server.use(express.static('dist'));

server.use('/api', ApiRouter);

server.get('/', async (req, res) => {
  // server render
  const { initialMarkup, initialData } = await serverRender();
  res.render('index', {
    initialMarkup,
    initialData,
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
