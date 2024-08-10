const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const bodyPaser = require('body-parser')

const connectDb = require('./connection')
const userRouter = require('./routes/userRouter.js')

const app = express()

app.use(bodyPaser.json())

app.use(cors({
    origin: [
        'https://safe-zonneeeee.vercel.app/',
        'http://localhost:3000/',
        'https://safe-zonneeeee-qejrfqt3b-tushars-projects-fe2cc83f.vercel.app/'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
    optionSuccessStatus: 200
}));




connectDb()

app.use('/debugging',(req,res)=>{
    res.send('<h1> Hello , world!!</h1>')
})


app.use('/api/auth', userRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})