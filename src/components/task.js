import React, { component, Component } from "react";
import axios from "axios";

const TaskList = (props) => (
  <tr>
    <td>{props.TaskInfo.id}</td>
    <td>{props.TaskInfo.title}</td>

    <td>
      <label>{props.TaskInfo.completed ? "True" : "False"}</label>
    </td>

    <td>
      <button type="button" class="btn btn-danger">
        Delete
      </button>
    </td>
  </tr>
);

export default class task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: [],
    };
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/todos").then((response) => {
      this.setState({
        dataArr: response.data,
      });
      console.log("Data", this.state.dataArr);
    });
  }
  //   handleChange = (e) => {
  //     this.props.onUpdate(e.target.value);
  //     this.setState({ fieldVal: e.target.value });
  //   };

  taskList() {
    if (this.state.dataArr.length > 0) {
      return this.state.dataArr.map(function (currentDataArr, i) {
        console.log("Inside map function", currentDataArr);
        return <TaskList TaskInfo={currentDataArr} key={i}></TaskList>;
      });
    } else {
      return (
        <tr>
          <td colSpan="4">No data found</td>
        </tr>
      );
    }
  }
  render() {
    return (
      <div>
        <h1>Task</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.taskList()}</tbody>
        </table>
      </div>
    );
  }
}
