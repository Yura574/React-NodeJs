import Router from 'express'
import userController from '../controller/UserController.js';

const userRouter = new Router();

userRouter.get('/user', userController.getUsers);
userRouter.get('/user/:id', userController.getOneUser);
userRouter.post('/user', userController.createUser);
userRouter.put('/user', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

export default userRouter