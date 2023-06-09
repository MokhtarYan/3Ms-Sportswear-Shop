import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import "./header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../../redux/reducers/userReducer";

import { userLogout } from "../../redux/actions/actionUsers";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const Container = styled.div`
  height: 60px;
  width: 100%;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const HeaderNav = ({ search, handleChange, lan, chan }) => {
  const dispatch = useDispatch();
  const { isAuth, users } = useSelector((state) => state.userReducer);
  console.log(isAuth);
  return (
    <div className="header">
      <Container
        className="container
    "
      >
        <Wrapper>
          <Left>
            <Language>
              <select name="" id="" onChange={chan}>
                <option value="EN">EN</option>
                <option value="FR">FR</option>
              </select>
            </Language>
            {isAuth ? (
              <SearchContainer>
                <Input
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                />
              </SearchContainer>
            ) : (
              <SearchContainer>
                <Input placeholder={lan === "FR" ? "Rechercher" : "Search"} />
              </SearchContainer>
            )}
          </Left>
          <Center>
            <Logo className="Logo">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <img
                  className="logo"
                  src="https://res.cloudinary.com/dqzabjiql/image/upload/v1680655229/logo_f_sbt40d.png"
                  alt=""
                />
                'Sportswear Shop
              </Link>
            </Logo>
          </Center>
          <Right>
            <MenuItem>
              {!isAuth ? (
                <Link to="/signup" className="register">
                  {lan === "FR" ? "S'inscrire" : "Sign up"}
                </Link>
              ) : null}
            </MenuItem>
            <MenuItem>
              {isAuth && users.userRole === "user" ? (
                <Link
                  to="/Fav"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <AiOutlineHeart />
                </Link>
              ) : null}
            </MenuItem>
            <MenuItem>
              {isAuth && users.userRole === "user" ? (
                <Link
                  to="/cart"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <AiOutlineShoppingCart />
                </Link>
              ) : null}
            </MenuItem>

            <MenuItem>
              {!isAuth ? (
                <Link to="/signin" className="register">
                  {lan === "FR" ? "Se Connecter" : "Sign in"}
                </Link>
              ) : (
                <Link
                  to="/"
                  className="register"
                  onClick={() => dispatch(userLogout())}
                >
                  {lan === "FR" ? "Déconnecter" : "Log out"}
                </Link>
              )}
            </MenuItem>
            <MenuItem></MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HeaderNav;
