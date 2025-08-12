import mongoose from "mongoose";

const blockSchema = new mongoose.Schema({
    name: String,
});
 const blocks = mongoose.model("blocks", blockSchema);


export default blocks;
