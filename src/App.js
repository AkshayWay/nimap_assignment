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

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <div className="container" style={{ minHeight: 511 + "px" }}>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/officer" component={Officers}></Route>
          <Route path="/adminPortal" component={AdminPortal}></Route>
          <Route path="/editNews/:id" component={EditNews}></Route>
          <Route path="/instruction/:id" component={Instruction}></Route>
          <Route path="/WorkPost" component={WorkPost}></Route>
          <Route path="/WorkDetails/:id" component={WorkDetails}></Route>
        </div> */}
    </div>
  );
}

export default App;
