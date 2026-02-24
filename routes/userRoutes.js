import { addUser,deleteUser,showUser,login} from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/showUser", showUser);
userRouter.post("/addUser", addUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/login", login);
export default userRouter;