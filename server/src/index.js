import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";


dotenv.config({
    path: "/.env"
});
connectDB();
const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))




app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`));