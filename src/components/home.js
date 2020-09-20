import React, { component, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import App from "../App.css";
import Navbar from "./navbar";

export default class home extends Component {
  render() {
    //const { value } = this.state;
    return <Navbar />;
  }
}
