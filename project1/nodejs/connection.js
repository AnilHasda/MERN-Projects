import mongoose from "mongoose";
const url="mongodb://localhost:27017/mern1"
let schema=new mongoose.Schema({
    name:String,
    age:Number
})
export default async function connection(){
    let check=await mongoose.connect(url);
   try{
            let collection = mongoose.model("data",schema);
            return collection;
        }catch(error){
            return error;
        }
    
}