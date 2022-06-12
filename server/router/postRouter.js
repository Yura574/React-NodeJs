import Router from 'express'
import postController from '../controller/PostController.js'

const userRouter = new Router();



userRouter.get('/post', postController.getPost)
userRouter.post('/post', postController.createPost)
userRouter.put('/post', postController.updatePost)
userRouter.delete('/post/:id', postController.deletePost)


export default userRouter