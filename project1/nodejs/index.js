import express from "express";
import connection from "./connection.js";
 import { ObjectId } from "mongodb";
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors())
app.get("/",async (req,resp)=>{
    let collection=await connection();
    let query=await collection.find();
resp.send(query);
})
app.post("/",async (req,resp)=>{
    let collection=await connection();
    let query=new collection(req.body);
    let result=await query.save();
    
    if(result){
        console.log("data inserted successfully",result)
    }
    else{
        console.log("error while inserting data")
    }
    resp.send("this is test message"+req.body.name)
})
app.delete("/:id", async (req, resp) => {
    let collection = await connection();
    try {
    
      // Convert req.params.id to string to ensure it's valid
      const id = String(req.params.id);
  
      console.log("id:", id);
      console.log("typeof id:", typeof id);
  
      // Create ObjectId using the id
      const objectId = new ObjectId(id);
  
      let query = await collection.deleteOne({ _id: objectId });
      if (query.deletedCount === 1) {
        console.log("Deleted successfully");
        resp.send("Deleted successfully");
      } else {
        console.log("No document found to delete");
        resp.status(404).send("No document found to delete");
      }
    } catch (error) {
      console.error("Error while deleting data:", error);
      resp.status(500).send("Error while deleting data");
    }
  });
  app.put("/:id",async (req,resp)=>{
    let collection = await connection();
    let id=String(req.params.id);
    console.log(req.params.id)
    try{
 let query=await collection.updateOne({_id:new ObjectId(id)},{$set:req.body});
 console.log("Data updated successfull");
    }catch(error){
      console.log({"error":error});
    }
  })
  
app.listen(4000,()=>{
    console.log("App is running on port:4000");
})