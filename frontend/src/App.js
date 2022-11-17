import React from "react";
import "./App.css";

import LandingPage from "./components/LandingPage/landing-page.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardAdmin from "./components/board-admin.component";
import { Routes, Route } from "react-router-dom";
import AddMeal from "./components/MealComponents/meals.component";
import AdminMenu from "./components/MenuComponents/admin-menu.component";
import UserMenu from "./components/MenuComponents/user-menu.component";
import Orders from "./components/orders.component";
import MealForm from "./pages/meal-create-form";
import TotalMeals from "./components/MealComponents/TotalMeals.component";
import EditForm from "./pages/meal-edit-form";
import Layout from "./components/layout.component";
import ShoppingCart from "./components/CartComponents/cart.component";
import RequireAuth from "./components/require-auth.component";
import Unauthorized from "./components/unauthorized.component";
import Missing from "./components/missing.component";

const ROLES = {
  User: "ROLE_USER",
  Admin: "ROLE_ADMIN",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<BoardAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* protected routes  */}
        <Route
          path="/welcome"
          element={
            <RequireAuth allowedRoles={[ROLES.User]}>
              <UserMenu />
            </RequireAuth>
          }
        ></Route>

        <Route path="/today-menu" element={<UserMenu />} />

        {/* <Route
          path="/cart"
          element={
            <RequireAuth allowedRoles={[ROLES.User]}>
              <ShoppingCart />
            </RequireAuth>
          }
        ></Route> */}

        <Route path="/cart" element={<ShoppingCart />} />

        <Route
          path="/admin"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <AddMeal />
            </RequireAuth>
          }
        ></Route>

        {/* <Route
          path="/admin/login"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <BoardAdmin />
            </RequireAuth>
          }
        ></Route> */}

        <Route
          path="/admin/meals"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <AddMeal />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/admin/menu"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <AdminMenu />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/admin/orders"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <Orders />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/admin/meals/meal-form"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <MealForm />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/admin/meals/edit/:id"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <EditForm />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/total"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <TotalMeals />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/admin/meals/page/:pageNumber"
          element={
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <TotalMeals />
            </RequireAuth>
          }
        ></Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
