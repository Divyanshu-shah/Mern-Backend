import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
const addUser = async (req, res) => {
    const body = req.body;
    const hassedPassword = await bcrypt.hash(body.password, 10);
    body.password = hassedPassword;
    const result = await userModel.create(req.body);
    res.json(result);
};
const showUser = async (req, res) => {
    const result = await userModel.find();
    res.json(result);
};
const deleteUser = async (req, res) => {
    const result = await userModel.findByIdAndDelete(req.params.id);
    res.json(result);
};
const login = async (req, res) => {
    const { email, password } = req.body;
    const found = await userModel.findOne({ email });
    if (!found) {
        const chkPassword = await bcrypt.compare(password, found.password);
        if (chkPassword) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid password" });
        }
    }
    else{
        res.status(401).json({ message: "User not found" });
    }
};
export { addUser, showUser, deleteUser, login };