import React, { useEffect } from "react";
import axios from "axios";
import { updateData } from "../slices/Slices";
import { useSelector, useDispatch } from "react-redux";
const ShowAll = () => {
    let data = useSelector((state) => state.reducer.datas);
  let dispatch = useDispatch();
  async function getData() {
    try {
      let response = await axios.get("http://localhost:3000");
      dispatch(updateData(response.data));
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return <div>
    {/* {data ?
    data.length>0?
    
    <table className="w-full h-auto border border-red-700 text-center">
      <thead>
        <tr className="h-[60px]"><th>s.n.</th><th>fname</th><th>lname</th><th>email</th><th>user</th></tr>
      </thead>
      <tbody>
        {data.map((ele,index)=>{
          return <tr className="h-[60px]"key={index}>
            <td>{index+1}</td><td>{ele.fname}</td><td>{ele.lname}</td><td>{ele.email}</td><td>{ele.user}</td>
            </tr>
          
        })}
      </tbody>
    </table>
    :<p>data is not available</p>
:<p>loading...</p>} */}
this is anil hasda
  </div>
};

export default ShowAll;
