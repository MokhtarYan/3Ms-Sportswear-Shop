import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import userReducer from "../../redux/reducers/userReducer";
const HeaderNavv = () => {
  const { users, loading } = useSelector((state) => state.userReducer);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {users ? (
                users.userRole === "admin" ? (
                  <Nav.Link>
                    {" "}
                    <Link to={"/user/userList"} className="nav2">
                      Users
                    </Link>
                  </Nav.Link>
                ) : null
              ) : null}
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
              <Nav.Link>
                {" "}
                <Link to={"/product/Kids"} className="nav2">
                  Kids
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavv;
