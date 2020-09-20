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

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <div className="container">
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
