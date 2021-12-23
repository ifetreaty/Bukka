import React, { Component } from "react";

import './App.css';
import Homepage from "./components/homepage.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
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
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={<BoardAdmin/>} />
      </Routes>
    </div>
  );
}

export default App;