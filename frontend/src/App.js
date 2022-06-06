import React, { useMemo } from "react";

import "./App.css";
import LandingPage from "./components/landing-page.component";
import UserHomePage from "./components/user-homepage.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import AdminHome from "./components/admin-homepage.component";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import AddMeal from "./components/MealComponents/meals.component";
import AdminMenu from "./components/MenuComponents/admin-menu.component";
import Orders from "./components/orders.component";
import MealForm from "./pages/meal-create-form";
import TotalMeals from "./components/MealComponents/TotalMeals.component";
import EditForm from "./pages/meal-edit-form";
import MealPagination from "./components/MealComponents/meal-pagination";
import { UserProvider } from "./context/UserProvider";
import Layout from "./components/layout.component";
import RequireAuth from "./components/require-auth.component";
import Unauthorized from "./components/unauthorized.component";
import Missing from "./components/missing.component";

const ROLES = {
  User: "ROLE_USER",
  Admin: "ROLE_ADMIN",
};

function App() {
  const [user, setLoginUser] = useState({});

  const value = useMemo(() => ({ user, setLoginUser }), [user, setLoginUser]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* protected routes  */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/welcome" element={<UserHomePage />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/login" element={<BoardAdmin />} />
          <Route path="/admin/meals" element={<AddMeal />} />
          <Route path="/admin/menu" element={<AdminMenu />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/meals/meal-form" element={<MealForm />} />
          <Route path="/admin/meals/edit/:id" element={<EditForm />} />
          <Route path="/total" element={<TotalMeals />} />
          <Route
            path="/admin/meals/page/:pageNumber"
            element={<TotalMeals />}
          />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
