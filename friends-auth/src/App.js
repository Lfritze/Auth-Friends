import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends</Link>
          </li>
        </ul> */}
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList} />
          <Route exact path="/" component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
