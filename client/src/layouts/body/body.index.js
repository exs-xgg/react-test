import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class Body extends Component {
  state = {
    data: null,
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="twice.png" />
              <Card.Body>
                <Card.Title>Signal 4th Mini Album</Card.Title>
                <Card.Text>
                  Signal is the fourth extended play (EP) by South Korean girl
                  group Twice. The EP was released on May 15, 2017 by JYP
                  Entertainment and distributed by Genie Music.
                </Card.Text>
                <Button variant="danger">Watch on YouTube</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;
