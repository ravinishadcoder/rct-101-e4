// Auth Actions here
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from "./auth.types";

import axios from "axios";

export const loginAPI = (data) => (dispatch) => {
  //TODO
  //console.log(data)
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then((res) => {
      {
        dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: res.data });
      }
    })
    .catch(() => {
      dispatch({ type: AUTH_SIGN_IN_ERROR });
    });
};

export const logoutAPI = () => ({ type: AUTH_SIGN_OUT });
