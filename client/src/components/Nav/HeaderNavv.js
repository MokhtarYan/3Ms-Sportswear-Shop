import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderNavv = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to={"/product/allProducts"} className="nav2">
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to={"/product/Women"} className="nav2">
                  Women
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to={"/product/Men"} className="nav2">
                  Men
                </Link>
              </Nav.Link>
              <NavDropdown title="Brands" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/product/Nike"} className="nav2">
                    Nike
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/product/Adidas"} className="nav2">
                    Adidas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link to={"/product/Puma"} className="nav2">
                    Puma
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavv;
