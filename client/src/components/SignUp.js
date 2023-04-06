import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/action";
import userReducer from "../redux/reducers/userReducer";
import { Navigate } from "react-router-dom";
const SignUp = () => {
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        {loading ? (
          <h1>Wait a sec!</h1>
        ) : users ? (
          <Navigate to="/signin"></Navigate>
        ) : (
          <>
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label htmlFor="">E-mail:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Password:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors ? errors.errors.map((el) => <p>{el.msg}</p>) : null}

            <button type="submit">Sign Up</button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUp;
