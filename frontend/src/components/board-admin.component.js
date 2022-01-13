import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, useNavigate } from "react-router-dom";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

// function boardAdmin() {
// 	return (
// 		<div>
// 			<p>This is the admin page</p>
// 		</div>
// 	)
// }

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    username: "",
    password: "",
    loading: false,
    message: ""
  });
  const form = React.useRef();
  const checkBtn = React.useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    setState({
      ...state,
      message: "",
      loading: true
    });

    form.current.validateAll();


    if (checkBtn.current?.context._errors.length === 0) {
      AuthAdminService.login(state.username, state.password).then(
        () => {
          navigate('/admin-homepage')
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
              error.message || error.toString();

          setState({
            ...state,
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      setState({
        ...state,
        loading: false
      });
    }
  }

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value
    });
  }

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value
    });
  }

  return (
      <div className="container">
        <div className="app-wrapper">
          {/* <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" /> */}
          <div>
            <h2 className="title">Admin Login</h2>
          </div>

          <Form
            onSubmit={handleLogin}
            ref={form}
          >

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input type="text" className="form-control" name="username" value={state.username}
            onChange={onChangeUsername} validations={[required]} />
          </div>

          <div className="form-group pass">
            <label htmlFor="password">Password</label>
            <Input type="password" className="form-control" name="password" value={state.password}
            onChange={onChangePassword} validations={[required]} />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={state.loading} >
              {state.loading && (
                <span className="spinner-border spinner-border-small"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {/* <div>
            <p className="link-register"><span className="link-style">Don't have an account?</span><Link to="/register">Register</Link></p>
          </div> */}

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
}

export default Login;
// export default boardAdmin;

// export default class BoardAdmin extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

// 	componentDidMount() {
//     UserService.getAdminBoard().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString()
//         });
// 			}
//     );
//   }

// 	render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//           <h3>{this.state.content}</h3>
//         </header>
//       </div>
//     );
//   }
// }