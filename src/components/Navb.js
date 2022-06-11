import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navb = ({ setText }) => {
  return (
    <div className="Navbe">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src="./images/logo.png" alt="" className="App-logo" />
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/games"
                style={{ textDecoration: "none", color: "white" }}
              >
                Games
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link
                to="/upcoming"
                style={{ textDecoration: "none", color: "white" }}
              >
                Upcoming
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navb;
