import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("DB Connection Failled")
        console.error("Failed to connect to MongoDB:", error.message);

        process.exit(1)

    }
}