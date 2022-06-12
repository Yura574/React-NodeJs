const Router = require('express')
const userRouter = new Router();
const postController = require('../controller/PostController')



userRouter.get('/post', postController.getPost)
userRouter.post('/post', postController.createPost)
userRouter.put('/post', postController.updatePost)
userRouter.delete('/post/:id', postController.deletePost)



module.exports = userRouter