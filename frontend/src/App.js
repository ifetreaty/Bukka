import React, { Component } from "react";

import './App.css';
// import Homepage from "./components/homepage.component"
import Login from "./components/login.component"
import Register from "./components/register.component"
import { Routes, Route } from "react-router-dom";
import {useState} from 'react';
function App() {
  const [user,setLoginUser] = useState({

  });

  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/">
          {
            user && user._id ? <Homepage/>:<Login/>
          }<Homepage/></Route> */}
        <Route path="/" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;