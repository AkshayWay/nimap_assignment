import React, { component, Component } from "react";
import { Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      userName: localStorage.getItem("localUser"),
      UserPassword: localStorage.getItem("localPassword"),
      changePassword: false,
      redirect: false,
      AlertDisplay: "none",
    };
  }
  changePassword = (e) => {
    this.setState({
      changePassword: true,
    });
  };
  onPasswordChange = (e) => {
    this.setState({
      UserPassword: e.target.value,
    });
  };
  savePassword = (e) => {
    debugger;
    var testPassword = this.state.UserPassword;
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var test = reg.test(testPassword);
    if (test) {
      localStorage.setItem("localPassword", this.state.UserPassword);
      this.setState({
        changePassword: false,
        UserPassword: localStorage.getItem("localPassword"),
      });

      alert("Password changed successfully");
    } else {
      this.setState({
        AlertDisplay: "inherit",
      });
    }
  };
  logout = (e) => {
    localStorage.setItem("isLogin", "false");
    this.setState({
      redirect: true,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect push to="/" /> : null}
        <form onSubmit={this.submitForm}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="inputUsername"
                value={this.state.userName}
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              {this.state.changePassword == false ? (
                <input
                  type="password"
                  className="form-control col-md-4"
                  id="inputPassword"
                  placeholder="Password"
                  value={this.state.UserPassword}
                  readOnly
                  required
                />
              ) : (
                <div>
                  <input
                    type="text"
                    className="form-control col-md-4"
                    id="inputPassword"
                    placeholder="Password"
                    value={this.state.UserPassword}
                    onChange={this.onPasswordChange}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        </form>

        <div className="form-group row">
          {this.state.changePassword == false ? (
            <button
              id="changePassword"
              className="btn btn-light col-sm-2"
              onClick={this.changePassword}
              style={{
                border: "black",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              Change Password
            </button>
          ) : (
            <button
              id="changePassword"
              className="btn btn-light col-sm-2"
              onClick={this.savePassword}
              style={{
                border: "black",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              Save Password
            </button>
          )}
          <button
            id="logout"
            className="btn btn-light col-sm-2"
            onClick={this.logout}
            style={{
              border: "black",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            Logout
          </button>
        </div>

        <div
          className="alert alert-danger"
          role="alert"
          style={{ display: this.state.AlertDisplay }}
        >
          Password must contain
          <p>
            1. At least 1 lowercase
            <br />
            2. At least 1 uppercase
            <br />
            3. At least 1 numeric
            <br />
            4. At least one special character
            <br />
            5. And must be eight characters or longer
          </p>
        </div>
      </div>
    );
  }
}
