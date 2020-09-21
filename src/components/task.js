import React, { component, Component } from "react";
import { Modal, Button, Form, Col, Alert } from "react-bootstrap";
import axios from "axios";
var items = [];
const TaskList = (props) => (
  <tr>
    <td>{props.TaskInfo.id}</td>
    <td>{props.TaskInfo.title}</td>

    <td>
      <label>{props.TaskInfo.completed ? "True" : "False"}</label>
    </td>

    <td>
      <DeleteNewsInfo variant={props.TaskInfo} />
    </td>
  </tr>
);

function DeleteNewsInfo(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("props.TaskInfo:" + props.variant.title);
  const deleteAndClose = () => {
    var retrievedData = localStorage.getItem("LocalDataArr");
    var items = JSON.parse(localStorage.getItem("LocalDataArr"));

    // items = items.filter((item) => item.id == props.variant.id);
    // alert("Length:" + items.length);
    // if (items.length !== 0) {
    //   localStorage.removeItem("LocalDataArr");
    // }
    // console.log("new data", localStorage.getItem("LocalDataArr"));

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.id == props.variant.id) {
        items.splice(i, 1);
      }
    }
    items = JSON.stringify(items);
    localStorage.setItem("LocalDataArr", items);
    console.log("New data", localStorage.getItem("LocalDataArr"));
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You want to delete '<b>{props.variant.title}</b>' ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={deleteAndClose}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

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
      localStorage.setItem("LocalDataArr", JSON.stringify(this.state.dataArr));
      //var retrievedData = localStorage.getItem("LocalDataArr");
      //items = JSON.parse(retrievedData);

      // items = items.filter((item) => item.id == 2);
    });
  }
  //   handleChange = (e) => {
  //     this.props.onUpdate(e.target.value);
  //     this.setState({ fieldVal: e.target.value });
  //   };

  taskList() {
    if (this.state.dataArr.length > 0) {
      return this.state.dataArr.map(function (currentDataArr, i) {
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
