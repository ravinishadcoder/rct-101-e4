// Note: Do not update/change the initial state
import {
 
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN_LOADING,
} from "./auth.types";
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch (type) {
    case  AUTH_SIGN_IN_LOADING: {
      return { ...state,loading: true, error: false };
    }
    case AUTH_SIGN_IN_SUCCESS: {
        localStorage.setItem("token",payload.token)
      return { ...state,loading:false,error:false,isAuthenticated:true,token:payload.token };
    }
    case AUTH_SIGN_IN_ERROR: {
      return { ...state, loading: false, error: true,isAuthenticated:false };
    }
    case AUTH_SIGN_OUT: {
        localStorage.removeItem("token")
      return { ...state,isAuthenticated:false,token:"" };
    }
    default: {
      return state;
    }
  }
};
