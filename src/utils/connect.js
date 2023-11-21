import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

async function connectDb(){
try {
   await mongoose.connect(DB_URL)
   console.log(`Successfuly connected to DB!`);
} catch (error) {
    console.log(error.message);
}
}


export default connectDb;