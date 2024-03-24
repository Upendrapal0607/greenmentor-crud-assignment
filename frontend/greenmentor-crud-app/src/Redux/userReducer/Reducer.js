import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAIL,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT_REQUEST_SUCCESS,
    REGISTER_REQUEST_SUCCESS,
  } from "./ActionType";
  
  const initialState = {
    isLoading: false,
    message: "",
    isError: false,
    token: "",
    isAuth: false,
    userName: "",
    userDetails: {},
  };
  
  export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case LOGIN_REQUEST_SUCCESS:
        return {
          ...state,
          isError: false,
          isLoading: false,
          token: payload.token,
          message: payload.message,
          isAuth: payload.message == "login successful" ? true : false,
          userDetails: payload?.user
        };
      case LOGIN_REQUEST_FAIL:
        return {
          ...state,
          isLoading: false,
          isError: true,
          token: "",
          isAuth: false,
          userName: "",
          message: "",
          userDetails:{}
        };
      case REGISTER_REQUEST_SUCCESS:
        return {
          ...state,
          isError: false,
          isLoading: false,
        };
      case LOGOUT_REQUEST_SUCCESS:
        return {
          ...state,
          isError: false,
          isLoading: false,
          token: "",
          message: payload.message,
          isAuth: false,
          userName: ""
        };
      default:
        return state;
    }
  };
  