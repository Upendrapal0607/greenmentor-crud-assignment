import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
} from "./ActionType";
import { userBasheUrl } from "../../url/url";

export const LoginRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .post(`${userBasheUrl}/login`, payload)
      .then((res) => {
        dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data });
        console.log({ myData: res });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};

export const RgisterRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .post(`${userBasheUrl}/register`, payload)
      .then((res) => {
        dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: res.data });
        if (res?.data?.token) {
          localStorage.setItem(
            "greenmentortoken",
            JSON.stringify(res.data.token)
          );
        }
        return res;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};

export const LogoutRequest = (token) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .get(`${userBasheUrl}/logout`, { headers: { Authorization: token } })
      .then((res) => {
        console.log({ resinType: res });
        dispatch({ type: LOGOUT_REQUEST_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};
