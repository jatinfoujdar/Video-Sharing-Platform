import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";


dotenv.config();
connectDB();
const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    if (req.method === 'POST') {
        console.log('Request Body:', req.body);
    }
    next();
});




app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`));