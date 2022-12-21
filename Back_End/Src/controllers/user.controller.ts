import { User } from "../models/users.model";
import { Response, Request } from "express";

const user = new User();
export const index = async (_req: Request, res: Response) => {
    try {
        const result = await user.index();
        res.send(result);
    } catch (error) {
        res.status(400);
        throw new Error("DataBase Failed");
    }
};

export const show = async (req: Request, res: Response) => {
    try {
        const result = await user.show(parseInt(req.params.id));
        res.send(result);
    } catch (error) {
        res.status(400);
        throw new Error("DataBase Failed");
    }
};

