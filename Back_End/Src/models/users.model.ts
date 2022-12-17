import db from "../database";
import UserType from "../types/User.type";

export class User {
    async index() {
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
    // async show();
    // async create();
    // async update();
    // async delete();
}
