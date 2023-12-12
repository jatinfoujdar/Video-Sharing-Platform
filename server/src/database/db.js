import mongoose from "mongoose";

import { DB_NAME } from "../utils/apiError.js";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
       
        
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB