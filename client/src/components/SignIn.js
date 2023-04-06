import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action";
import userReducer from "../redux/reducers/userReducer";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  };
  const { loading, errors } = useSelector((state) => state.userReducer);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {loading ? (
          <h1>loading...</h1>
        ) : localStorage.getItem("token") ? (
          <Navigate to="/profile"></Navigate>
        ) : (
          <>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors ? <p>{errors.msg}</p> : null}
            <button type="submit">Sign in</button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignIn;
