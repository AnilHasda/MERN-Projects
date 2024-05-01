import express from "express";
import { LoginSystem, getData, insertData } from "../controllers/controllers.js";
import checkLogin from "../loginCheckMiddleware/loginCheck.js";
import multer from "multer";
const app=express();
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        console.log(file)
     cb(null,"./upload");
    },
    filename:function (req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})
const checkData=multer({storage})
const router=express.Router();
app.use(express.json())
router.post("/",checkData.single("profile"),insertData);
router.post("/Login",LoginSystem);
router.use(checkLogin);
router.get("/",getData);
router.get("/profile",(req,resp)=>{
    resp.send({message:"login successful"});
})
export default router;
