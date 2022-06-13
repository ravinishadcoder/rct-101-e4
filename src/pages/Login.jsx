import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../store/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(loginCreds));
    window.location.href="/"
  };
  // useEffect(() => {
  //   if (isAuth) {
  //     navigate(" ")
  //   }
  // }, [navigate, isAuth]);
  return (
    <div> login
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email"
         name="email"
         placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
         />
        <input data-cy="login-password" 
        name="password"
        type="password"
        placeholder="Enter Password..."
        value={loginCreds.password}
        onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
