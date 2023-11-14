import React from "react";
import {Routes, Route} from 'react-router-dom'
import Enterprise from "./components/Enterprise";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { Select } from "./components/Select";
import SignUp from "./components/SignUp";
import Testing from "./components/Testing";


export default function app() {
  return (
    <div className="bg-red-600 container mx-auto">
      <NavBar />
      <Home />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes> */}
      {/* <Login /> */}
      {/* <Testing /> */}
      {/* <Select /> */}
    </div>
  );
}
