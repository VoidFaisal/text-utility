import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import Test from "./Components/Test";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";

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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);
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
  return (
    <>
      <Router>
        <Navbar about="About" />
      </Router>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
