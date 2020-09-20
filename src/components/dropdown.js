import React, { component, Component } from "react";

export default class dropdown extends Component {
  constructor(props) {
    super();
    this.state = {
      fieldVal: "1",
    };
  }
  handleChange = (e) => {
    this.props.onUpdate(e.target.value);
    this.setState({ fieldVal: e.target.value });
  };
  render() {
    return (
      <div>
        <select
          value={this.props.fieldVal}
          onChange={this.handleChange}
          class="form-control"
          style={{ width: "25%", marginTop: "20px", marginBottom: "20px" }}
        >
          <option value="0">Select Title</option>
          <option value="1">Title 1</option>
          <option value="2">Title 2</option>
          <option value="3">Title 3</option>
        </select>
      </div>
    );
  }
}
