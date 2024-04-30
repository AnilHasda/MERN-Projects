import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config("../.env");
const url=process.env.URL;
console.log(url)
const connection=async ()=>{
await mongoose.connect(url+"/authentication");
}
export default connection;