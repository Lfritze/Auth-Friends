import React from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={NavBar} />
        <Container className="app-container themed-container" fluid>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
        </Container>
      </>
    );
  }
}

export default App;
