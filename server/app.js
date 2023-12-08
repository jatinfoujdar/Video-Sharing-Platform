
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router as userRoutes } from "./routes/userRoutes.js";


const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRoutes);


export { app };
