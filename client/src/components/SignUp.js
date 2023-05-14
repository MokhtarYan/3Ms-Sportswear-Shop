import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../redux/reducers/userReducer";
import { Navigate } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import Spinner from "react-bootstrap/Spinner";
import { registerUser } from "../redux/actions/actionUsers";

const SignUp = ({ lan }) => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { loading, users, errors } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { fullName, email, password };
    dispatch(registerUser(newUser));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form action="" onSubmit={handleSubmit} className="formSignup">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : users ? (
          <Navigate to="/signin"></Navigate>
        ) : (
          <>
            <MDBRow>
              <label htmlFor="" className="lab">
                {lan === "FR" ? "Nom et Prénom" : "Name"}
              </label>
              <MDBInput
                className="inputSignup"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

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

            {!errors ? null : errors.msg ? (
              <p>{errors.msg}</p>
            ) : (
              errors.errors.map((el) => <p>{el.msg}</p>)
            )}

            <MDBBtn type="submit" className="mb-4" block>
              {lan === "FR" ? "S'inscrire" : "Sign up"}
            </MDBBtn>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUp;
