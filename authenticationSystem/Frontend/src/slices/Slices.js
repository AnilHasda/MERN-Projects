import { createSlice } from "@reduxjs/toolkit";
let initialState={
    datas:[],
}
let slice1=createSlice({
    name:"data",
    initialState,
    reducers:{
        updateData:(state,action)=>{
            state.datas=action.payload;
        }
    }
});
let slice2=createSlice({
    initialState:{userLogged:false},
    name:"authSlice",
    reducers:{
        updateLogged:(state,action)=>{
            state.userLogged=true;
        },
        logout:(state,action)=>{
            state.userLogged=false;
        }
    }
})
export const {updateData}=slice1.actions;
export const {updateLogged,logout}=slice2.actions;
const reducer={
    slice1:slice1.reducer,
    slice2:slice2.reducer
}
export default reducer;

