const express = require('express');
const cors = require('cors');
const fs = require('fs');
const stream = require('stream');

const app = express();
const port = process.env.APP_SERVER_PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/cats', (req, res) => {
  const readable = fs.createReadStream('./cats.json');
  res.status(200);
  readable
  .pipe(res);
})

app.get('*', (req, res) => {
  res.sendStatus(404);
})

app.listen(port, () => {
  console.log('Server listening on port', port);
})