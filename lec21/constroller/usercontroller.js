
import User from "../model/usermodel.js";

export const signupfunc =async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({status:false, message: "Email and password required" });
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ status:false, message: "User already exists" });
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ status:true, message: "Signup successful" });
}