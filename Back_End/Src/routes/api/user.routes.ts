import { Router } from "express";

import {
    index,
    create,
    update,
    del,
    show,
} from "../../controllers/user.controller";
const userRoutes = Router();

userRoutes.get("/", index);
userRoutes.get("/:id", show);
userRoutes.post("/", create);
userRoutes.patch("/:id", update);
userRoutes.delete("/:id", del);
export default userRoutes;
