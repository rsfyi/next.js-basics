const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // adding logic
    server.get('/users/profile/:id', (req, res) => {
      const actualPage = `/users/profile`;
      const queryParams = { userId: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log(`> Server is ready on http://localhost:3000`);
    });
  })
  .catch((e) => {
    console.error(err.stack);
    process.exit(1);
  });
