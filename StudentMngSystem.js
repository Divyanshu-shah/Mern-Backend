// // db.js

// import mongoose from "mongoose";
// const connectDB = async () => {
//     await mongoose.connect("mongodb://localhost:27017/studentdb");
// };
// export default connectDB;



// // studentModel.js

// import mongoose from "mongoose";
// const studentSchema = new mongoose.Schema({
//     name: {type: String,required: true},
//     email: {type: String,required: true,unique: true},  
//     age: {type: Number,required: true},
//     course: {type: String,required: true},
//     createdAt: {type: Date,default: Date.now}
// });
// const studentModel = mongoose.model("students", studentSchema);
// export default studentModel;



// // studentController.js

// import studentModel from "./studentModel.js";
// const addUser = async (req, res) => {
//     const body = req.body;
//     const result = await studentModel.create(body);
//     res.json(result);
// };
// const showUser = async (req, res) => {
//     const result = await studentModel.find();
//     res.json(result);
// };
// const deleteUser = async (req, res) => {
//     const result = await studentModel.findByIdAndDelete(req.params.id);
//     res.json(result);
// };
// export { addUser, showUser, deleteUser };



// // studentRoutes.js

// import express from "express";
// import { addUser, showUser, deleteUser } from "./studentController.js";
// const studentRouter = express.Router();
// studentRouter.post("/add", addUser);
// studentRouter.get("/show", showUser);
// studentRouter.delete("/delete/:id", deleteUser);
// export default studentRouter;



// // index.js

// import express from "express";
// import connectDB from "./db.js";
// import studentRouter from "./studentRoutes.js";
// const app = express();
// app.use(express.json());
// const startServer = async () => {
//     await connectDB();
//     app.listen(8080, () => console.log("Server started"));
// };
// startServer();
// app.use("/api/students", studentRouter);