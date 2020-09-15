import React, { Component } from "react";

class Login extends Component {
  state = {
    data: null,
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TWICE FAN CLUB</h1>
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
        </header>
      </div>
    );
  }
}

export default Login;
