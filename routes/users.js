const usersRouter = require('express').Router();
const { getUserData, updateProfile } = require('../controllers/users');

usersRouter.get('/users/me', getUserData);
usersRouter.patch('/users/me', updateProfile);

module.exports = usersRouter;
