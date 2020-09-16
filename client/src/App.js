import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App.scss";
import Login from "./login/login";
import Home from "./layouts/home.index";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // this.callBackendAPI()
    //   .then((res) => this.setState({ data: res.express }))
    //   .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  

  render() {
    if (!true) {
      return <Login />;
    } else {
      return (
        <body>
          <Home />
        </body>
      );
    }
  }
}

export default App;
