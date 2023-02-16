import express from 'express';
import os from 'node:os';

const server = express();
const PORT: Number = 5000;

server.set('view engine', 'ejs');

server.use(express.static('dist'));

server.use('/', (req, res) => {
  res.render('index', {
    content: 'EJS is <em>cool</em>',
  });
});

server.listen(PORT, () => {
  console.info(
    `Express server listening at http://loaclhost:${PORT}\nfree Memory is: ${parseInt(
      (os.freemem() / 1024 / 1024) as unknown as string
    )} mb`
  );
});
