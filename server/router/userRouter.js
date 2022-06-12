const Router = require('express')
const userRouter = new Router();
const userController = require('../controller/userController');

userRouter.get('/user', userController.getUsers);
userRouter.get('/user/:id', userController.getOneUser);
userRouter.post('/user', userController.createUser);
userRouter.put('/user', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

module.exports = userRouter