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

    // CREATE A USER
    async create(u: UserType): Promise<UserType> {
        try {
            const connection = await db.connect();
            const sql = `INSERT INTO products (email,username,password) VALUES ($1,$2,$3) RETURNING *;`;
            const hash = bcrypt.hashSync(
                u.password + BCRYPT_PASSWORD,
                parseInt(SALT_ROUND as string)
            );
            const query = await connection.query(sql, [
                u.email,
                u.username,
                hash,
            ]);
            connection.release();
            return query.rows[0];
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }

    //UPDATE A USER
    async update(u: UserType): Promise<UserType> {
        try {
            const connection = await db.connect();
            const sql = `UPDATE users SET email = ($1),username=($2) , password =($3) RETURNING *;`;
            const query = await connection.query(sql, [
                u.email,
                u.username,
                u.password,
            ]);
            connection.release();
            return query.rows[0];
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }

    // DELETE A USER
    async delete(id: number): Promise<UserType> {
        try {
            const connection = await db.connect();
            const sql = `DELETE FROM products WHERE id = ($1) RETURNING *`;
            const query = await connection.query(sql, [id]);
            connection.release();
            return query.rows[0];
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }
}
