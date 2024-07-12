import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Signup from "./components/SignUp"; 
import Register from "./components/Register";
import Enterprise from "./components/Enterprise";

function App() {
  const location = useLocation()
  const hideInLocation = ["/signup", "/register"]

  const hideNavBar = hideInLocation.includes(location.pathname)
  return (
    <div>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
    </div>
  );
}

export default App
