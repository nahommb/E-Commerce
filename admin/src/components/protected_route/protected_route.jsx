import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {

  const  isAuthenticated = useSelector((state)=>state.authReducer.isValideToken);

  return isAuthenticated ? children : <Navigate to="/" />;

} 

