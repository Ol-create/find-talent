import React from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Enterprise from "./components/Enterprise";
import SignUp from "./components/SignUp";
import Testing from "./components/Testing";
import Login from "./components/Login";

export default function app() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes> */}
      <Login />
      {/* <Testing /> */}
    </div>
  );
}
