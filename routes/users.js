const usersRouter = require('express').Router();
const { getUserData, updateProfile } = require('../controllers/users');
const { idValidation, userDataValidation } = require('../middlewares/validation');

usersRouter.get('/users/me', idValidation, getUserData);
usersRouter.patch('/users/me', userDataValidation, updateProfile);

module.exports = usersRouter;
