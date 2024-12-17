import './login_signup.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, validateToken } from '../../context/redux/auth/authAction';
import { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';


export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const user = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loginError, setLoginError] = useState(false);
  
  console.log(user.isLoading) 
  useEffect(() => {
    
   dispatch(validateToken());
  
  }, [dispatch]);
 
  
  useEffect(() => {
    
    if (user?.isLoggedIn) {
      setShowPopup(true);
      
      
      // setTimeout(() => setShowPopup(false), 2000); // Auto-hide after 2 seconds
    }

    if (user?.error) {
     
      setLoginError(true);
      
    }
    
  }, [user]); //user?.loggedIn

  useEffect(() => {
    
    if (user?.isValideToken) { 
      navigate('/dashboard');
    } 
   
   // setIsLoading(user.isLoading)
  }, [user?.isValideToken, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginAction({
        email: email ,
        password: password,
      })     
    ); 
   
  };

  return (
    <>
    {user.isLoading?<div className="flex justify-center items-center h-screen">
      <CircularProgress/>
    </div>:
    
        <div className="login">
        <div>
          <h3 style={{ color: 'green' }}>Login</h3>
          <p>Dress up and got your dreams</p>
          <form onSubmit={loginHandler}>
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
        {showPopup && (
          <div style={popupStyles}>
            <p>Successfully Logged In!</p>
            <Button
              style={{ color: '#4caf50', marginTop: '13px' }}
              onClick={() => {
                setShowPopup(false)
                navigate('/dashboard');
              }
              }
            >
              OK
            </Button>
          </div>
        )}
        {loginError && (
          <div style={popupStyles}>
            <p style={{ color: 'red' }}>{user.error.message}</p>
            <Button
              style={{ color: '#4caf50', marginTop: '13px' }}
              onClick={() => {
                setLoginError(false)
              }
              }
            >
              OK
            </Button>
          </div>
        )}
      </div>
    }
  
    </>
  );
};

const popupStyles = {
  position: 'fixed',
  height: '100px',
  width: '300px',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border:'2px solid #4caf50',
  color: '#4caf50',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  textAlign: 'center',
};
