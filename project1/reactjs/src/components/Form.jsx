import React, { useState, useEffect } from "react";
import { Box, Button, Collapse } from "@chakra-ui/react";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const Form = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [data, setData] = useState([]);
  let [id,setId]=useState("");
  let [btnText, setBtnText] = useState("Add Data");
  const insertData = async (e) => {
    e.preventDefault();
    if (btnText === "Add Data") {
      let send = await axios.post("http://localhost:4000/", {
        name: name,
        age: age,
      });
      if (send) {
        console.log(data);
        alert("data send successfully");
        setName("");
        setAge("");
        showData();
      } else {
        alert("data failed to send");
      }
    } else {
      updateData();
    }
  };
  async function showData() {
    try {
      let response = await axios.get("http://localhost:4000/");
      setData(response.data);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    showData();
  }, []);

  //delete data

  async function deleteData(id) {
    console.log(id);
    let response = await axios.delete("http://localhost:4000/" + id);

    if (response.status === 200) {
      alert("Data deleted successful");
      showData();
    } else {
      alert("Failed to delete data");
    }
  }

  //function to update data
  async function updateUI(name, age, id) {
    setName(name);
    setAge(age);
    setBtnText("Update Data");
    setId(id);
  }
  const updateData = async () => {
  
      try {
        let response = await axios.put("http://localhost:4000/"+ id, {
          "name": name,
          "age": age,
        });
        if(response.status===200){
        alert("Data updated successfully");
        setBtnText("Add Data");
        showData();
        setName("");
        setAge("");
        }
        else{
          alert("Failed to update data")
        }
      } catch (error) {
        alert("Failed to update data");
        console.log({ error: error });
      }
  };
  return (
    <>
      <Box
        h="60px"
        w="full"
        bg="blueviolet"
        display="grid"
        placeItems="center"
        color="#fff"
        fontWeight="bold"
      >
        MERN To-Do List App
      </Box>
      <Box h="auto" w="50%" m="auto" mt="50px">
        <form onSubmit={insertData}>
          <FormControl>
            <FormLabel>Enter Name</FormLabel>
            <Input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
            <FormLabel>Enter age</FormLabel>
            <Input
              type="number"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              value={age}
              required
            />
            <Button
              type="submit"
              bg="blueviolet"
              color="#fff"
              _hover={{ opacity: 1, bg: "blue" }}
              my="20px"
            >
              {btnText}
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box>
        <table
          border={1}
          style={{
            height: "auto",
            width: "50%",
            margin: "auto",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <thead>
            <tr style={{ height: "60px" }}>
              <th>s.n.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, index) => {
              return (
                <tr key={index} style={{ height: "60px" }}>
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.age}</td>
                  <td
                    style={{
                      display: "flex",
                      gap: "40px",
                      border: "none",
                      height: "100%",
                      width: "100%",
                      paddingTop: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <FaRegTrashAlt
                      size="20px"
                      onClick={() => {
                        deleteData(ele._id);
                      }}
                    />
                    <FaPenToSquare
                      size="20px"
                      onClick={() => {
                        updateUI(ele.name, ele.age, ele._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default Form;
