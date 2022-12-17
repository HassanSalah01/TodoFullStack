import { Router } from "express";
import userRoutes from "./api/user.routes";

const routes = Router();

routes.use("/users", userRoutes);

routes.get("/", (req, res) => {
    res.send("hello from routers");
});

export default routes;
