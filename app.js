const path = require('path');

const express = require('express');

const server = express();

const PORT = 3000;

server.use('/', (req, res) => {
  res.send('<h1>I\'m not saying Hello World again</h1>');
})

server.listen(PORT)
