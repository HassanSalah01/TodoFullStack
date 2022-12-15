import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const { SERVER_PORT } = process.env;

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("HOME PAGE");
});

app.listen(SERVER_PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${SERVER_PORT}`);
});
