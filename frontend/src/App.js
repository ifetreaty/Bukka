import React, { Component } from "react";

import "./App.css";
import Homepage from "./components/homepage.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import AdminHome from "./components/admin-homepage.component";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import AddMeal from "./components/meals.component";
import Orders from "./components/orders.component";
import MealForm from "./pages/meal-create-form";
import TotalMeals from "./components/TotalMeals.component";
import EditForm from "./pages/meal-edit-form";
function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/login" element={<BoardAdmin />} />
        <Route path="/admin/meals" element={<AddMeal />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/meals/meal-form" element={<MealForm />} />
        <Route path="/admin/meals/edit/:id" element={<EditForm />} />
        <Route path="/total" element={<TotalMeals />} />
      </Routes>
      <AdminHome />
    </div>
  );
}

export default App;
