import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import Card from "./routes/card.js";
import connectDB from "./db/database.js";
// APP CONFIG
const app = express();
const port = process.env.PORT || 5500;

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use("/", Card);

// DB CONFIG
connectDB();

// API ENDPOINTS
app.get("/", (req, res) => res.status(200).send("Welcome Derrick"));

// LISTERNER
app.listen(port, () => console.log(`Listening on localhost:${port}`));
