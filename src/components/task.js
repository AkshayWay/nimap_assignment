import React, { component, Component } from "react";
import { Modal, Button, Form, Col, Alert } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";

const TaskList = (props) => (
  <tr id={props.TaskInfo.id}>
    <td>{props.TaskInfo.id}</td>
    <td>{props.TaskInfo.title}</td>

    <td>
      <label>{props.TaskInfo.completed ? "True" : "False"}</label>
    </td>

    <td>
      <DeleteTaskInfo variant={props.TaskInfo} />
    </td>
  </tr>
);

function DeleteTaskInfo(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteAndClose = () => {
    var retrievedData = localStorage.getItem("LocalDataArr");
    var items = JSON.parse(localStorage.getItem("LocalDataArr"));
    $("table#taskTbl tr#" + props.variant.id + "").remove();
    //Delete row from localstorage
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.id == props.variant.id) {
        items.splice(i, 1);
      }
    }
    items = JSON.stringify(items);
    localStorage.setItem("LocalDataArr", items);

    setShow(false);
  };
  return (
    <>
      <Button variant="primary" className="btn btn-danger" onClick={handleShow}>
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
function AddNewTask() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const AddAndClose = () => {
    var rowCount = $("#taskTbl tr").length;
    var isCompleted = $("#isCompleted").is(":checked");
    var newTitle = $("#newTitle").val();
    setShow(false);
    $("#taskTbl").append(
      "<tr id='rowCount'><td>" +
        rowCount +
        "</td><td>" +
        newTitle +
        "</td><td>" +
        isCompleted +
        "</td><td><button type='button' class='btn btn-primary'>Delete</button></td></tr>"
    );
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" id="newTitle" />
                </td>
                <td>
                  <input type="checkbox" id="isCompleted" />
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={AddAndClose}>
            Add
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
      localStorage.setItem("LocalDataArr", JSON.stringify(this.state.dataArr));
    });
  }
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
        <AddNewTask />
        <table className="table" id="taskTbl">
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
