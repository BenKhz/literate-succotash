const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// middleware here.
app.use(express.json());
app.use(express.urlencoded());

// serve static files
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

// Simple Routes
app.get('/test', (req, res) => {
  res.set(200).send('GET REQUEST TO /test');
});

app.post('/test', (req, res) => {
  res.set(200).send('POST REQUEST TO /test');
});

// Turn it on!
app.listen(PORT, (err) => {
  !err ? console.log(`Server listening on port: ${PORT}`) : console.error(err);
});

