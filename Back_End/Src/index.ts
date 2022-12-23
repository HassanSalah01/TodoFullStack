import express, { Request, Response } from "express";
import routes from "./routes/index.routes";
import errorMiddleware from "./middleware/error.middleware";
import dotenv from "dotenv";

dotenv.config();
const { SERVER_PORT } = process.env;

const app = express();
app.use(express.json());
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("HELLO WORLD !!");
});

app.use(errorMiddleware);
app.listen(SERVER_PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${SERVER_PORT}`);
});
