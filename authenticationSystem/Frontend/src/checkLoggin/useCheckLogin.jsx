import {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateLogged,logout } from "../slices/Slices";
import axios from "axios";
const useCheckLogin = () => {
    let logged=useSelector(state=>state.slice2 && state.slice2.userLogged);
    let dispatch=useDispatch();
    const checkLoggin=async ()=>{
let response=await axios.get("http://localhost:3000/frontendLogginCheck",{
withCredentials: true
    })
if(response.data.userLogged){
  dispatch(updateLogged());
}
else{
  dispatch(logout())
}
    }
    useEffect(()=>{
        checkLoggin();
    },[])
    return logged;
}

export default useCheckLogin