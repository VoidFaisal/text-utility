import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#766dd3";
      showAlert("Dark mode Has Been Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Has Been Enabled", "success");
    }
  };
  const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<><Navbar mode={mode} toggleMode={toggleMode} title="text-utils"/> 
      <Alert alert={alert}/><TextForm alert={showAlert} heading="Enter your Text Here" mode={mode}/></>,
      
    },
    {
      path:"/about",
      element:<><Navbar mode={mode} toggleMode={toggleMode} title="text-utils"/> 
      <Alert alert={alert}/><About/></>,
    },
  ])
  return(
    <>
  
<RouterProvider router={router}/>
  </>
);
  
}

export default App;
