import {configureStore} from "@reduxjs/toolkit";
import reducer from "../slices/Slices.js";
let Store=configureStore({
reducer:{
    reducer,
}
});
export default Store;
