import React, { Component } from "react";

import './App.css';
import Homepage from "./components/homepage.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import AdminHome from "./components/admin-homepage.component";
import { Routes, Route } from "react-router-dom";
import {useState} from 'react';

import Meals from "./components/meals.component";
import Orders from "./components/orders.component";
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
        <Route path="/admin/login" element={<BoardAdmin/>} />
        {/* <Route path="/admin-homepage" element={<AdminHome/>} /> */}
        <Route path="/admin/meals" element={<Meals/>} />
        <Route path="/admin/orders" element={<Orders/>} />
      </Routes>
      <AdminHome />
    </div>
  );
}

export default App;
