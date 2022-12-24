import db from "../database";
import UserType from "../types/Product.type";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();
const { SALT_ROUND, BCRYPT_PASSWORD } = process.env;

export class User {
    // Get All Users
    async index(): Promise<UserType[]> {
        try {
            const connection = await db.connect();
            const sql = `SELECT * FROM products;`;
            const query = await connection.query(sql);
            connection.release();
            return query.rows;
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }

    // Show A Specific User
    async show(id: number): Promise<UserType> {
        try {
            const connection = await db.connect();
            const sql = `SELECT * FROM products WHERE id = ($1) ;`;
            const query = await connection.query(sql, [id]);
            connection.release();
            return query.rows[0];
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }


