const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    ref: 'movie',
    required: true,
    unique: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
    },
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
