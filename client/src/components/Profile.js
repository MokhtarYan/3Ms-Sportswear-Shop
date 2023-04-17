import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../redux/reducers/userReducer";
import { Navigate } from "react-router-dom";
import { getProfile } from "../redux/actions/actionUsers";

const Profile = () => {
  const { users, isAuth } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    console.log(isAuth);
  }, []);

  return (
    <div>
      {isAuth ? (
        <div> Hello {users.fullName}!</div>
      ) : (
        <Navigate replace to="/signin"></Navigate>
      )}
    </div>
  );
};

export default Profile;
