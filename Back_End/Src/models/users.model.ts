import db from "../database";
import UserType from "../types/User.type";

export class User {
    async index(): Promise<UserType[]> {
        try {
            const connection = await db.connect();
            const sql = `SELECT * FROM users;`;
            const query = await connection.query(sql);
            connection.release();
            return query.rows;
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }
    async show(id: number): Promise<UserType> {
        try {
            const connection = await db.connect();
            const sql = `SELECT * FROM users WHERE id = ($1) ;`;
            const query = await connection.query(sql, [id]);
            connection.release();
            return query.rows[0];
        } catch (error) {
            throw new Error("Cant Retreve Data From Table Users");
        }
    }
    async create(u: UserType): Promise<UserType> {
        try {
            const connection = await db.connect();
            const sql = `INSERT INTO users (email,username,password) VALUES ($1,$2,$3) RETURNING *;`;
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
    // async update();
    // async delete();
}
