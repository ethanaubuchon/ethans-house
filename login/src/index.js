const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(
  process.env.NODE_PORT,
  () => console.log(`Listening on port ${process.env.NODE_PORT}!`)
);
