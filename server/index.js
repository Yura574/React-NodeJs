const express = require('express')
require('dotenv').config()
const userRouter = require('./router/userRouter')
const postRouter = require('./router/postRouter')

const PORT = process.env.PORT || 5000


const app =express();
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)



app.listen(PORT, () => console.log(`server started ${PORT} port`))