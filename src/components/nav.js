import React, { component, Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import App from "../App.css";

export default class nav extends Component {
  constructor() {
    super();
  }
  //Display navigation bar only if login flag is true else display h1 tag with error message
  render() {
    return (
      <div>
        {localStorage.getItem("isLogin") == "true" ? (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/home">
              Logo
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/task" className="nav-link">
                    Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user" className="nav-link">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          <h1>Sorry...Login first</h1>
        )}
      </div>
    );
  }
}
