import React from "react";
import { axiosWithAUth } from "../utils/axiosWithAuth";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner
} from "reactstrap";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };
  login = event => {
    event.preventDefault();
    this.setState({ isFetching: true });
    axiosWithAUth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("./friends");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form className="log-in" onSubmit={this.login}>
            <legend>Log In</legend>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button>Submit</Button>{" "}
            {this.state.isFetching && <Spinner size="sm" color="secondary" />}
          </Form>
        </Col>
      </Row>
    );
  }
}
export default Login;
