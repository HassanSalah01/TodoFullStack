import { Pool } from "pg";
import dotenv from "dotenv";
let db;
dotenv.config();

const {
    POSTGRES_USER,
    POSTGRES_DB_DEV,
    POSTGRES_DB_TEST,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

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
        database: POSTGRES_DB_DEV,
    });
}
export default db;
