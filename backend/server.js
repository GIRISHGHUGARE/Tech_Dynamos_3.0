const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const bodyPaser = require('body-parser')

const connectDb = require('./connection')
const userRouter = require('./routes/userRouter.js')

const app = express()


connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})

app.use(cors())
app.use(bodyPaser.json())

app.use('/api/auth',userRouter);
