import express from "express"
const app = express();

app.use(express.static(`${process.cwd()}/public`))
app.use(express.json())
import { loginHandler,registerHandler } from "./controllers/usercontroller.js";
import { deleteTodo,createTodo,showTodo } from "./controllers/todocontroller.js";
app.post("/user/login",loginHandler)
app.post("/user/register",registerHandler)
app.post("/todo/show",showTodo);
app.get("/todo/delete/:id",deleteTodo);
app.post("/todo/create",createTodo);


app.listen(4444,()=>{
    console.log("server started on 4444");
})