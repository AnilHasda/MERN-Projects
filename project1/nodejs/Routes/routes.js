import express from "express";
import { readData, insertData, deleteData, updateData } from "../controllers/controllers.js";
let router = express.Router();
router.get("/", readData);
router.post("/", insertData);
router.delete("/:id", deleteData);
router.put("/:id", updateData);
export default router;
