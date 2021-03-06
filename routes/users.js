const usersRouter = require('express').Router();
const { getUserData, updateProfile } = require('../controllers/users');
const { userDataValidation } = require('../middlewares/validation');

usersRouter.get('/users/me', getUserData);
usersRouter.patch('/users/me', userDataValidation, updateProfile);

module.exports = usersRouter;
