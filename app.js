import express, { json } from "express";
import { config } from "dotenv";
import cors from"cors"
import userrouter from "./routes/user.js";
config({
    path:"./db/config.env"
})
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(userrouter)