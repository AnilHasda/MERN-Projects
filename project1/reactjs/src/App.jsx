import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./components/Form";
import "./App.css";
const App = () => {
  return (
   <ChakraProvider>
<Form/>
    </ChakraProvider>
  );
};

export default App;
