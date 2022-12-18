import express, { Request, Response } from "express";
import routes from "./routes/index.routes";
import errorMiddleware from "./middleware/error.middleware";
import dotenv from "dotenv";
import db from "./database";

dotenv.config();
const { SERVER_PORT } = process.env;

const app = express();
app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
    throw new Error();
});
const test = async () => {
    const connection = await db.connect();
    const sql = "select * from users";
    const result = await connection.query(sql);
    console.log(result.rows);
    connection.release();
};
test();

app.use(errorMiddleware);
app.listen(SERVER_PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${SERVER_PORT}`);
});
