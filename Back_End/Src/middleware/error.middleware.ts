import { Request, Response, NextFunction } from "express";
import Error from "../interfaces/error.interface";

const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = error.status || 400;
    const message = error.message || "Opps Smth Went Wrong";
    res.status(status);
    res.json({ status, message });
};
export default errorMiddleware;
