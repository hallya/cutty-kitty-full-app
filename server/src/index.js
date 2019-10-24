const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/cats', (req, res) => {
  const options = {
    hostname: 'latelier.co',
    path: '/data/cats.json',
    port: 443,
    method: 'GET',
  }

  https
    .request(options, (response) => {
      response.on('data', (data) => {
        console.log(data.toString());
        console.log('\n----------------------------\n');
      });
      response.pipe(res);
    })
    .on('error', (error) => {
      console.error(error);
      res.sendStatus(400);
    })
    .end();
})

app.get('*', (req, res) => {
  res.sendStatus(404);
})

app.listen(port, () => {
  console.log('Server listening on port', port);
})