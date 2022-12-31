require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? 'dev.env' : '.env',
});
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectMongoDb } = require('./config/mongo.db.js');

const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// connectMongoDb(MONGO_URI);

app.use('/api/v1', require('./api/routes'));
app.use('/', (req, res) => {
  res.send('Api --boilerplate');
});

module.exports = app;
