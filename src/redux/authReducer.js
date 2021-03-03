import axios from "axios";
import { stopSubmit } from "redux-form";
import { authAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SETUSERDATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export function setAuthUserData(userId, email, login, isAuth) {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      isAuth,
    },
  };
}

export const authMe = () => (dispatch) => {
  return authAPI.authMe().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(authMe());
    } else {
      let message = data.messages[0];
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logOut = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
