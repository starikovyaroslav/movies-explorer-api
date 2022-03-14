const { Joi, celebrate } = require('celebrate');
const validator = require('validator');

const urlValidate = (url) => {
  const result = validator.isURL(url);
  if (!result) {
    throw new Error('Введите URL');
  }
  return url;
};

const userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const userDataValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const idValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const movieValidation = celebrate({
  body: Joi.object().keys({
    id: Joi.number().integer().required(),
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(urlValidate),
    trailerLink: Joi.string().required().custom(urlValidate),
    thumbnail: Joi.string().required().custom(urlValidate),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  userValidation,
  userDataValidation,
  idValidation,
  loginValidation,
  movieValidation,
};
