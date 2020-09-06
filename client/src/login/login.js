import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    data: null,
  };

  componentDidMount() {}

  render() {
    return (
      <div className="login">
        <input
          type="text"
          id="username"
          placeholder="유저네임"
          autoComplete="off"
        />
        <br />
        <input type="password" id="password" placeholder="펬우오드" />
      </div>
    );
  }
}

export default Login;
