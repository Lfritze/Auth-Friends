import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
