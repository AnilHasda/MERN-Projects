import express from "express";
const app=express();
 import router from "./Routes/routes.js"
import cors from "cors";
app.use(cors())
app.use(express.json());
app.use(router);
app.listen(4000,()=>{
    console.log("App is running on port:4000");
})
