const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { createUser, login, logout } = require('../controllers/users');
const { loginValidation, userValidation } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', userValidation, createUser);
router.post('/signin', loginValidation, login);
router.delete('/signout', logout);

router.use('/', auth, moviesRouter);
router.use('/', auth, usersRouter);

router.use('*', () => {
  throw new NotFoundError('Данная страница не существует');
});

module.exports = router;
