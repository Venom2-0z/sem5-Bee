import express from "express";
import mongoose from "mongoose";
import User from "./models/userModel.js";
import {User2} from "./models/userModel.js";
import blocks from "./models/user.js";
const app = express();

app.use(express.json());

app.post("/api/users", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new User2({ name, email, password });
        await user.save();
        res.status(201).json({success: true, message: "User created successfully", user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error({ success: false, message: "Error fetching users:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


app.get("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error({ success: false, message: "Error fetching user:", error });
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});



async function addblock(){
    const name = "cwdcwvev";
    const block = new blocks({ name });
    await block.save();
}
addblock()

mongoose.connect("mongodb://localhost:27017/lec17" )
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.listen(3333,()=>{
    console.log("started on port 3333")
})