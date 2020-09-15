import React, { Component } from "react";
import NavBar from "./navbar/navbar.index";
import Body from "./body/body.index";
class Home extends Component {
  state = {
    data: null,
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default Home;
