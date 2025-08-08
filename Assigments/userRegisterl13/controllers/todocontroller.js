import tododb from "../tododb.json" with {type:"json"}
import fs from "fs/promises"

export const  showTodo = (req,res)=>{
    const {email} = req.body;
    const userTodos = tododb.filter(ele => ele.email === email);
    res.json({success:true,message:"got all user todos",data:userTodos});
}

export const  createTodo = (req,res)=>{
    const {email,title,id} = req.body;
    tododb.push({
        id,
        email,
        title,
    })
    try{
        fs.writeFile("./tododb.json",JSON.stringify(tododb))
        return res.json({success:true,message:"todo created",});
    }catch(err){
        return res.json({success:false,message:"err in creating todo "})
    }
}

export const  deleteTodo = (req,res)=>{
    const {id} = req.params
    const idx = tododb.findIndex(ele=>(ele.id===id))
    if(idx===-1)return res.json({success:false,message:"be error  "})
        tododb.splice(idx,1);
    try{
        fs.writeFile("./tododb.json",JSON.stringify(tododb))
        return res.json({success:true,message:"todo deleted",});
    }catch(err){
        return res.json({success:false,message:"err in deleting todo "})
    }
}