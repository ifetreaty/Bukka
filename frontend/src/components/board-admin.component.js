import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";

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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

   onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
              error.message || error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          {/* <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" /> */}
          <div>
            <h2 className="title">Admin Login</h2>
          </div>

          <Form onSubmit={this.handleLogin} ref={c => {
            this.form = c;
          }}>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input type="text" className="form-control" name="username" value={this.state.username}
            onChange={this.onChangeUsername} validations={[required]} />
          </div>

          <div className="form-group pass">
            <label htmlFor="password">Password</label>
            <Input type="password" className="form-control" name="password" value={this.state.password}
            onChange={this.onChangePassword} validations={[required]} />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={this.state.loading} >
              {this.state.loading && (
                <span className="spinner-border spinner-border-small"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    </div>
    );
  }
}
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