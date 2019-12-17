import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

export const LoginForm = props => {
  console.log(props);
  const [user, setUser] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });
  const handleChange = event => {
    setUser({
      credentials: {
        ...user.credentials,
        [event.target.name]: event.target.value
      }
    });
  };
  const loginSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", user.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        user.props.history.push("/protected");
      })
      .catch(error =>
        console.log("LoginForm.js axiosWithAuth error", error.res)
      );
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="shield.jpg" /> Log-in to your account
        </Header>
        <Form size="large" onSubmit={loginSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon="lock"
              type="text"
              name="username"
              label="username"
              value={props.username}
              onCHange={handleChange}
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
