const express = require('express')
require('dotenv').config()
const userRouter = require('./router/userRouter')

const PORT = process.env.PORT || 5000


const app =express();
app.use(express.json())
app.use('/api', userRouter)
app.get('/api', (req, res)=> {
    res.send('aslololo')
})


app.listen(PORT, () => console.log(`server started ${PORT} port`))