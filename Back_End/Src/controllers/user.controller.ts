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

export const create = async (req: Request, res: Response) => {
    try {
        const u = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };
        const result = await user.create(u);
        res.send(result);
    } catch (error) {
        res.status(400);
        throw new Error(`${error}`);
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const u = {
            id: parseInt(req.params.id),
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };
        const result = await user.update(u);
        res.send(result);
    } catch (error) {
        throw new Error(`${error}`);
    }
};

export const del = async (req: Request, res: Response) => {
    try {
        const result = await user.delete(parseInt(req.params.id));
        res.send(result);
    } catch (error) {
        throw new Error(`${error}`);
    }
};
