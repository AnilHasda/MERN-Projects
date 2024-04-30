import { createSlice } from "@reduxjs/toolkit";
let initialState={
    datas:[],
}
let CreateSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        updateData:(state,action)=>{
            state.datas=action.payload;
        }
    }
});
export const {updateData}=CreateSlice.actions;
export default CreateSlice.reducer;
