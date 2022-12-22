import { Pool } from "pg";
import dotenv from "dotenv";
let db;
dotenv.config();

const {
    POSTGRES_USER,
    POSTGRES_DEV_DB,
    POSTGRES_DB_TEST,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

try {
    if (ENV == "test") {
        db = new Pool({
            user: POSTGRES_USER,
            host: POSTGRES_HOST,
            password: POSTGRES_PASSWORD,
            database: POSTGRES_DB_TEST,
        });
    } else {
        db = new Pool({
            user: POSTGRES_USER,
            host: POSTGRES_HOST,
            password: POSTGRES_PASSWORD,
            database: POSTGRES_DEV_DB,
        });
    }
} catch (error) {
    throw new Error("failed to connect to database");
}
export default db as Pool;
