import axios from "axios";

import {
  REGISTER,
  GET_ALL_USERS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_USER,
  USER_LOGOUT,
} from "../actionTypes/UserActionTypes";

export const registerUser = (newUser) => async (dispatch) => {
  dispatch({ type: REGISTER });
  try {
    const { data } = await axios.post("/user/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const { data } = await axios.post("/user/login", user);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = { headers: { authorization: token } };

  dispatch({
    type: GET_PROFILE,
  });
  try {
    const { data } = await axios.get("/user/auth", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/userList");
    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("get all users error");
  }
};

export const editedUser = (user) => async (dispatch) => {
  try {
    const res = await axios.put(`/user/update/${user._id}`, user);
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (error) {
    alert("update User error");
  }
};
