/* eslint-disable max-len */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const limiter = require('./middlewares/rateLimiter');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const { REAL_PORT, REAL_BASE } = require('./utils/config');

const app = express();

/* app.use(cors({
  origin: ['http://movies-explorer.starikov.nomoredomains.work', 'https://movies-explorer.starikov.nomoredomains.work', 'http://api.movies-explorer.strkv.nomoredomains.work', 'https://api.movies-explorer.strkv.nomoredomains.work', 'localhost:3000'],
  allowedHeaders: ['Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin', 'Content-Type'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
})); */

mongoose.connect(REAL_BASE, {});

app.use(cors({
  origin: ['https://movies-explorers-frontend.herokuapp.com'],
  allowedHeaders: ['Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin', 'Content-Type'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
}));

/* const allowedCors = [

];

app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
  }

  next();
}); */

app.use(requestLogger);
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(REAL_PORT);
