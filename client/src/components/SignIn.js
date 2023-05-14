import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import userReducer from "../redux/reducers/userReducer";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { MDBBtn, MDBBtnGroup, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { loginUser } from "../redux/actions/actionUsers";

const SignIn = ({ lan }) => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  };
  const { loading, errors, users } = useSelector((state) => state.userReducer);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form action="" onSubmit={handleSubmit} className="formSignup">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : localStorage.getItem("token") ? (
          users.blocked ? (
            <Navigate to="/user/blocked"></Navigate>
          ) : (
            <Navigate replace to="/product/allProducts"></Navigate>
          )
        ) : (
          <>
            <MDBRow>
              <label htmlFor="" className="lab">
                {lan === "FR" ? "Adresse e-mail" : "E-mail adress"}
              </label>
              <MDBInput
                type="email"
                className="inputSignup"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="" className="lab">
                {lan === "FR" ? "Mot de passe" : "Password"}
              </label>
              <MDBInput
                type="password"
                className="inputSignup"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBRow>
            {errors ? <p>{errors.msg}</p> : null}
            <MDBBtn type="submit" className="mb-4" block>
              {lan === "FR" ? "S'inscrire" : "Sign in"}
            </MDBBtn>
          </>
        )}
      </form>
    </div>
  );
};

export default SignIn;
