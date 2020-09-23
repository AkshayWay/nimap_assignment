import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
  hashHistory,
} from "react-router-dom";
import "./App.css";

import Nav from "./components/nav";
import Home from "./components/home";
import Task from "./components/task";
import Login from "./components/login";
import User from "./components/user";

const Main = withRouter(({ location }) => {
  return (
    <div className="container">
      {location.pathname == "/" ? null : <Nav />}
      <Route path="/" exact component={Login}></Route>
      {localStorage.getItem("isLogin") == "true" ? (
        <div>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/task" component={Task}></Route>
          <Route path="/user" component={User}></Route>
        </div>
      ) : null}
    </div>
  );
});
function App() {
  return (
    <div className="container">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
