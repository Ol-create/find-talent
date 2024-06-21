import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Enterprise from "./components/Enterprise";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

import SignUp from "./components/SignUp";

export default function app() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </div>
    </Router>
  );
}
