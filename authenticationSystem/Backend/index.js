import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes.js";
import connection from "./connection/connection.js";
import cookieParser from "cookie-parser";
connection();
dotenv.config();
const app=express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({  origin: "http://localhost:5173",
methods: ["GET", "POST", "PUT", "DELETE"],
credentials: true
}))
const port=process.env.PORT || 4000;
app.use(router);
// app.get("/",async (req,resp)=>{
//     let password=await bcryptjs.hash("anil",10);
//     let response=await bcryptjs.compare("anil",password)
//         if(response){
//             resp.send("password matched")
//         }
//         resp.send("password doesnot match")
// })
app.listen(port,()=>{
    console.log("App is running on port:"+port);
})