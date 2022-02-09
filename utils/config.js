require('dotenv').config();

const {
  PORT = 3000,
  JWT_SECRET = 'develop-secret',
  BASE = 'mongodb://localhost:27017/moviesdb',
  NODE_ENV,
} = process.env;

const REAL_JWT_SECRET = NODE_ENV === 'production' ? JWT_SECRET : 'develop-secret';
const REAL_PORT = NODE_ENV === 'production' ? PORT : 3000;
const REAL_BASE = NODE_ENV === 'production' ? BASE : 'mongodb://localhost:27017/moviesdb';

module.exports = {
  REAL_JWT_SECRET,
  REAL_PORT,
  REAL_BASE,
};
