import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ children }) => {

  const  isAuthenticated = false;
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/" />;

} 

