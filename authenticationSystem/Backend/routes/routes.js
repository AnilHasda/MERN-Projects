import express, { application } from "express";
import { LoginSystem, getData, insertData } from "../controllers/controllers.js";
import checkData from "../multerMiddleware/multer.js";
import checkLogin from "../loginCheckMiddleware/loginCheck.js";
const app=express();
const router=express.Router();
router.post("/",checkData.single("profile"),insertData);
router.post("/Login",LoginSystem);
router.use(checkLogin);
router.get("/",getData);
router.get("/profile",(req,resp)=>{
    resp.send({message:"login successful"});
})
export default router;
