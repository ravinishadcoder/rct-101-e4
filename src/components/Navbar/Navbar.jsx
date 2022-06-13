import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAPI } from "../../store/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const  isAuthenticated  = useSelector((state) => state.auth.data.isAuthenticated);
  console.log(isAuthenticated)
  const handleLoginClick = () => {
    dispatch(logoutAPI());
    
  };
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-around"}}>
      
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link">logo</a>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",gap:"10px"}}>
        <div data-cy="navbar-cart-items-count">cart</div>
        <button data-cy="navbar-login-logout-button"
        onClick={handleLoginClick}
        
        >{ isAuthenticated ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
