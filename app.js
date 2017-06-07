const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const data = require('./mock').data;
app.use(cors())
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/products', function(req, res) {
  return res.json(data)
});
app.get('/products/:id', function(req, res) {
  return res.json(data.find((product) => product._id === req.params.id))
});

app.listen(4201, () => {
  'use strict';
  console.log('server start on 4201')
});

