import {schema} from "../schema/schema.js";
import mongoose from "mongoose";
export let model=mongoose.model("authTable",schema);
