import React, { component, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import App from "../App.css";
import Dropdown from "./dropdown";
import Information from "./information";

export default class navbar extends Component {
  constructor() {
    super();
    this.state = { selectedValue: "" };
  }
  onUpdate = (val) => {
    this.setState({
      selectedValue: val,
    });
  };
  //Navbar is parent component
  render() {
    return (
      <div>
        {/* child component */}
        <Dropdown
          onUpdate={this.onUpdate}
          selectedOption={this.state.selectedValue}
        />
        {/* child component */}
        <Information passedVal={this.state.selectedValue} />
      </div>
    );
  }
}
