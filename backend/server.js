const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const connectDb = require('./connection')

const app = express()

connectDb()

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})

