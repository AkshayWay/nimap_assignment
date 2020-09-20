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
    //this.handleChange = this.handleChange.bind(this);
  }
  //   changeDrp(changedValue) {
  //     this.setState({ selectedValue: changedValue });
  //     alert("changedValue" + changedValue);
  //   }
  onUpdate = (val) => {
    this.setState({
      selectedValue: val,
    });
  };
  //   renderSwitch(param) {
  //     switch (param) {
  //       case "1":
  //         return "Hi Akshay its one";
  //       case "2":
  //         return "Hi Manish its Two";
  //       default:
  //         return "foo";
  //     }
  //   }

  render() {
    return (
      <div>
        <Dropdown
          //handleChange={(this.changeDrp.bind(), this.props.selectedOption)}
          onUpdate={this.onUpdate}
          selectedOption={this.state.selectedValue}
        />
        <Information passedVal={this.state.selectedValue} />
      </div>
    );
  }
}
