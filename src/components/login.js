import React, { component, Component } from "react";
import { Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import loginCss from "../assets/loginStyle.css";

export default class login extends Component {
  constructor() {
    super();
    this.state = { userName: "", UserPassword: "", redirect: false };
  }
  componentDidMount() {
    localStorage.setItem("localUser", "DummyAdmin");
    var loginPWS = localStorage.getItem("localPassword");
    //default password will be admin@123456
    if (loginPWS == null || loginPWS == "" || loginPWS == "undefined") {
      localStorage.setItem("localPassword", "admin@123456");
      localStorage.setItem("isLogin", "false");
    }
  }

  onLoginCheck = (e) => {
    debugger;
    e.preventDefault();
    var loginName = localStorage.getItem("localUser");
    var loginPWS = localStorage.getItem("localPassword");
    //This will tell you what is current password for testing purpose only.
    alert(loginPWS);
    if (
      loginName == this.state.userName &&
      loginPWS == this.state.UserPassword
    ) {
      localStorage.setItem("isLogin", "true");
      this.setState({
        redirect: true,
      });
    } else {
      alert("Username or password is incorrect. Please try again");
    }
  };
  onUserNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  onPasswordChange = (e) => {
    this.setState({
      UserPassword: e.target.value,
    });
  };
  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect push to="/home" /> : null}
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={this.onLoginCheck}>
                  <label>User Name</label>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUserName"
                      className="form-control"
                      value={this.state.userName}
                      onChange={this.onUserNameChange}
                      placeholder="Username"
                      required
                      autoFocus
                    />
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      value={this.state.UserPassword}
                      onChange={this.onPasswordChange}
                      required
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
