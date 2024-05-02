import express from "express";
import { LoginSystem, getData, insertData,frontendLogginCheck } from "../controllers/controllers.js";
import checkLogin from "../loginCheckMiddleware/loginCheck.js";
import checkData from "../multerMiddleware/multer.js";
const app=express();
const router=express.Router();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
router.post("/",checkData,insertData);
router.post("/Login",LoginSystem);
router.get("/",getData);
router.use(checkLogin);
router.get("/frontendLogginCheck",frontendLogginCheck);
router.get("/profile",(req,resp)=>{
    resp.send({message:req.cookies});
})
export default router;
