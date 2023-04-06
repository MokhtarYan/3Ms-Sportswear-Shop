import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actionTypes";

const init = {
  users: null,
  loading: false,
  errors: null,
  isAuth: false,
  token: null,
};
const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        errors: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        users: payload.user,
        token: payload.token,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        users: payload,
        isAuth: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
