const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', (req, res) => {
  res.send('Api --boilerplate');
});

module.exports = app;
