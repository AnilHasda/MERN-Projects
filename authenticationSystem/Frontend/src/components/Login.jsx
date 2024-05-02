import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLogged } from "../slices/Slices";
import axios from "axios";
const Login = () => {
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();

  const loginData = async (e) => {
    e.preventDefault();
    let data = { user, password };
    try {
      let response = await axios.post("http://localhost:3000/Login", data, {
        withCredentials: true,
      });
      setUser("");
      setPassword("");
      alert(response.data.message);
      if (response && response.data.userLogged === true) {
        dispatch(updateLogged());
      }
    } catch (error) {
      console.log("error while sending data", error);
    }
  };
  return (
    <div className="h-auto w-full bg-[blueviolet] text-white py-10">
      <form className="m-auto w-[90%] md:w-[300px]" onSubmit={loginData}>
        <div className=" text-xl mb-8 font-semibold">
          <h3>Login Form</h3>
        </div>
        <label htmlFor="user" className="font-semibold">
          User-Name
        </label>
        <br />
        <input
          type="text"
          placeholder="enter user-name"
          id="user"
          className="h-[35px] pl-5 w-full  m-auto rounded-sm mb-4 mt-[5px] border-none outline-none text-black"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
          autoComplete="off"
          required
        />
        <br />
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <br />
        <input
          type="password"
          placeholder="enter password"
          id="password"
          className="h-[35px] pl-5 w-full m-auto rounded-sm mb-4 mt-[5px] border-none outline-none text-black"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          autoComplete="off"
          required
        />
        <br />
        <button
          type="submit"
          name="submit"
          className="h-[35px] w-full md:w-[120px] mt-5 bg-[#f1f1f1] text-black rounded-sm hover:bg-[#e6eaf0] transition duration-200"
        >
          submit
        </button>
      </form>
      <div className="m-auto w-[90%] md:w-[300px] mt-4">
        haven't account?
        <NavLink to="/signup">
          <u>create account</u>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
