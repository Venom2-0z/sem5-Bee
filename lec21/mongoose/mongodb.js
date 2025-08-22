import mongoose from "mongoose"

const uri = 'mongodb://localhost:27017/lec21';

export  const dbconnect = async  ()=>{
    try{
        await mongoose.connect(uri)
        console.log("connected")
    }
    catch{
        console.log("error")
    }
}