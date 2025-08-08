import fs from "fs/promises"
import userdb from "../userdb.json" with {type:"json"}
console.log(userdb)
export const loginHandler = (req,res)=>{
    const {email , password} = req.body;
    // userdb.push({name,email,password})
    const user = userdb.find(ele=>(ele.email=email));
    if(!user || user.password!=password )return res.json({success:false,message:"invalid vredentials "})
    res.json({success:true,message:"login success  "})

}

export const registerHandler =async (req,res)=>{
    const {name,email , password} = req.body;
    // userdb.push({name,email,password})
    const user = userdb.find(ele=>(ele.email=email));
    if(user)return res.json({success:false,message:"email already taken  "})
    userdb.push({name,email,password});
    try{
        await fs.writeFile("./userdb.json",JSON.stringify(userdb))
        return res.json({success:true,message:"login success  "})
        
    }catch(err){
        console.log(err)
        return res.json({success:false,message:"be error  "})
    }
}
