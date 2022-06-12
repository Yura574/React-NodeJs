import express from 'express'
import userRouter from "./router/userRouter.js";
import postRouter from './router/postRouter.js'
// require('dotenv').config()


const PORT = process.env.PORT || 5000


const app =express();
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)




async function startApp ()  {
    try {
        app.listen(PORT, () => console.log(`server started ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}
startApp()