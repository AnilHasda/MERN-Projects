import React from 'react'
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="h-[60px] w-full bg-[rgb(138,43,226)] flex items-center justify-between px-[50px] text-white uppercase">
    <div><img src="./images/logo.png"alt="logo-image"className="object-cover w-[30%] rounded-full"/></div>
   <div className="flex gap-5 font-semibold text-sm">
   <NavLink to="">Home</NavLink>
   <NavLink to="/profile">Profile</NavLink>
   <NavLink to="#">About us</NavLink>
   <NavLink to="#">Contact us</NavLink>
   <NavLink to="/login">Login</NavLink>
   <NavLink to="/signup">Signup</NavLink>
   </div>
 </nav>
  )
}

export default Navigation