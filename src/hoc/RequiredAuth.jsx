import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const  isAuthenticated  = useSelector((state) => state.auth.data.isAuthenticated);

  
  

  if (isAuthenticated) return children;
  return <Navigate to={"login"} />;
};

export default RequiredAuth;
