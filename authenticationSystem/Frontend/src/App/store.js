import {configureStore} from "@reduxjs/toolkit";
import reducer from "../slices/Slices.js";
let Store=configureStore({
reducer
});
export default Store;
