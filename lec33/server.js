import express from "express";
const app = express();



import { createClient } from "redis";
const client = createClient();
async function connect(){
    await client.connect();
    client.on("error",(err=>console.log(err)));
}
connect()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    });
})

async function catchdata(){
    await client.set("user:100",JSON.stringify([{
        name:"Nitesh",
        age:24
    }]))
}

// catchdata()
// .then(data=>{
//     console.log("Data cached successfully");
// })

async function getdata(key){
    const data = await client.get(key);
    return data
}
let profile = [{
    name:"Shivam",
    course:"cse",
}]
app.get("/profile",async(req,res)=>{
    const data = await getdata("profile");
    if(data){
        res.send(data);
    }
    else{
        await client.set("profile",JSON.stringify(profile));
        res.send(profile);
    }
})






// getdata("user:100").then(data=>{
//     console.log("Data from cache:", JSON.parse(data));
// });