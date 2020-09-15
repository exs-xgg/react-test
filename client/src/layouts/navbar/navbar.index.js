import React, { Component } from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
class NavBar extends Component {
  state = {
    data: null,
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/twice1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"  TWICE Fan Club but written in ReactJS"}
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
