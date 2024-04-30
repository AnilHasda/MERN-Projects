import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config("../.env");
let secret = process.env.SECRET_KEY;
import express from "express";
const app=express();
app.use(express.json())
import bcrypt from "bcryptjs";
import { model } from "../model/model.js";
export const getData = async (req, resp) => {
  let query = await model.find();
  resp.send(query);
};
export const insertData = async (req, resp) => {
  console.log(req.file);
  try {
    let checkEmail = await model.findOne({ email: req.body.email });
    if (checkEmail) {
      resp.send("Email already exist");
    } else {
      let checkUser = await model.findOne({ user: req.body.user });
      if (checkUser) {
        resp.send("user already exist");
      } else {
        let query = new model(req.body);
        let result = await query.save();
        if (result) {
          let token = jwt.sign(req.body, secret);
            resp.cookie("token", token, { httpOnly: true});
          resp.send("data inserted successfully and cookie set");
        } else {
          console.log("failed to insert data");
          resp.send("failed to insert data");
        }
      }
    }
  } catch (error) {
    resp.send("error whlile inserting data");
    console.log(error);
  }
};
//login section 
const LoginSystem=async (req,resp)=>{
  try{
let checkUser=await model.findOne({user:req.body.user});
if(checkUser){
  let checkPass=await bcrypt.compare(req.body.password,checkUser.password);
  if(checkPass){
    let token = jwt.sign(req.body,secret);
    resp.cookie("token",token,{httpOnly:true});
    resp.send("user login")
  }
  else{
    resp.send("password doesnot match");
  }
}
else{
  resp.send("user doesnot match! Please enter valid user");
}
  }catch(error){
    resp.send("error occurs"+error);
  }
}
export {LoginSystem};
