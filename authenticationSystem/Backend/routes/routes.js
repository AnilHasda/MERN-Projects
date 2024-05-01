import express from "express";
import { LoginSystem, getData, insertData } from "../controllers/controllers.js";
import checkLogin from "../loginCheckMiddleware/loginCheck.js";
import checkData from "../multerMiddleware/multer.js";
const app=express();
const router=express.Router();
app.use(express.json())
router.post("/",checkData,insertData);
router.post("/Login",LoginSystem);
router.use(checkLogin);
router.get("/",getData);
router.get("/profile",(req,resp)=>{
    resp.send({message:"login successful"});
})
export default router;
