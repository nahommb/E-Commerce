

const ProtectedRoute = ({ children }) => {
    
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const location = useLocation();

}