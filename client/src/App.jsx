import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Enterprise from "./components/Enterprise";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Signup from "./components/SignUp"; 
import Test from './test'

function App() {
  const location = useLocation()
  const hideInLocation = ["/signup", "/login", "/register"]

  const hideNavBar = hideInLocation.includes(location.pathname)
  return (
    <div>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
    </div>
  )
}

export default App
