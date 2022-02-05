const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', createUser);
router.post('/signin', login);

router.use('/', auth, moviesRouter);
router.use('/', auth, usersRouter);

router.use('*', () => {
  throw new NotFoundError('Данная страница не существует');
});

module.exports = router;
