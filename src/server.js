import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDb from "./utils/connect.js";
import api from '../src/routers/index.js'

const PORT = process.env.PORT;

const app = express();

app.use('/api', api)

app.use('*', async (req, res)=>{
    res.send({
        status : 404,
        message : `Not found URL!`,
        success : false
    })
})

function start(){
    app.listen(PORT, console.log(`Server is working on ${PORT} - PORT`))
    connectDb()
}

start()






