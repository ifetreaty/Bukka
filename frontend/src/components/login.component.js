import React, { Component, useContext, useEffect } from "react";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserContext from "../context/userContext";
import useUserContext from "../context/useUserContext";
import NavBar from "./admin-homepage.component";
// import LandingPage from "./landing-page.component";
import UserHomePage from "./user-homepage.component";

import AuthService from "../services/auth.service";
import userService from "../services/user.service";
import authHeader from "../services/auth-header";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const { setLoginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [state, setState] = React.useState({
    username: "",
    password: "",
    loading: false,
    message: "",
  });
  const form = React.useRef();
  const checkBtn = React.useRef();

  const userRef = React.useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    setState({
      ...state,
      message: "",
      loading: true,
    });

    form.current.validateAll();

    if (checkBtn.current?.context._errors.length === 0) {
      AuthService.login(state.username, state.password).then(
        (data) => {
          // navigate("/");
          setLoginUser(data);
          setState("");
          navigate(from, { replace: true });
          // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setState({
            ...state,
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      setState({
        ...state,
        loading: false,
      });
    }
  };

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">My Account</h2>
        </div>

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={state.username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group pass">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={state.password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              disabled={state.loading}
            >
              {state.loading && (
                <span className="spinner-border spinner-border-small"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          <div>
            <p className="link-register">
              <span className="link-style">Don't have an account?</span>
              <Link to="/register">Register</Link>
            </p>
          </div>

          {state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {state.message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
