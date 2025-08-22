import express from "express"
import {dbconnect} from "./mongoose/mongodb.js";
import User from "./model/usermodel.js"; 
import { signupfunc } from "./constroller/usercontroller.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4444;


app.post("/signup", signupfunc);

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ status:false, message: "Email and password required" });
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ status:false, message: "Invalid credentials" });
    res.json({ status:true, message: "Login successful" });
});



app.use(async (req,res,next)=>{
    const {email }= req.body;
    if(!email){
        return res.status(401).json({status:false, message:"Please login first"})
    }
    const curruser = await User.findOne({ email });
    if (!curruser) return res.status(404).json({status:false, message:"User not found"});
    req.user = curruser;
    next();
});



///

///



dbconnect();





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
