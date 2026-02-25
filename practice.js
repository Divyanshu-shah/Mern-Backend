// // db.js

// import mongoose from 'mongoose';
// const dbConnect = async () => {
//     await mongoose.connect("mongodb://localhost:27017/practice");
// };
// export default dbConnect;

// // userModel.js

// import mongoose from 'mongoose';
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },  
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         default: "user"
//         }
// });
// const userModel =mongoose.model("users", userSchema);
// export default userModel;

// // productModel.js

// import mongoose from 'mongoose';
// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true }, 
//     price: { type: Number, required: true },
//     description: { type: String, required: true },
//     imageurl: { type: String, required: true }
// });
// const productModel = mongoose.model("products", productSchema);
// export default productModel;

// // userController.js
// // productController.js

// import productModel from "../models/productModel.js";
// const addProduct = async (req, res) => {
//     const body = req.body;
//     const result = await productModel.create(body);
//     res.json(result);
// };
// const showProducts = async (req, res) => {
//     const result = await productModel.find();
//     res.json(result);
// };
// const deleteProduct = async (req, res) => {
//     const id = req.params.id;
//     const result = await productModel.findByIdAndDelete(id);
//     res.json(result);
// };
// export { addProduct, showProducts, deleteProduct };

// // userRoutes.js

// import express from "express";
// import {addUsers, showUsers, deleteUsers, login} from "../controllers/userController.js";
// const userRouter = express.Router();
// userRouter.post("/add", addUsers);
// userRouter.get("/show", showUsers);
// userRouter.delete("/delete/:id", deleteUsers);
// userRouter.post("/login", login);
// export default userRouter;

// // productRoutes.js

// import express from "express";
// import { addProduct, showProducts, deleteProduct } from "../controllers/productController.js";
// const productRouter = express.Router();
// productRouter.post("/add", addProduct);
// productRouter.get("/show", showProducts);
// productRouter.delete("/delete/:id", deleteProduct);
// export default productRouter;

// // auth.js

// import jwt from "jsonwebtoken";
// const auth = (req, res, next) => {
//     const token = req.headers.authorization;    
//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized" });
//     }