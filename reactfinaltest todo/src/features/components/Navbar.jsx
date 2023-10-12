import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navbox = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto ms-3 ">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/todo"}>
              Todos
            </Nav.Link>

            <Nav.Link as={Link} to={"/user"}>
              Userlist
            </Nav.Link>

            <Nav.Link as={Link} to={"/logout"} onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbox;
