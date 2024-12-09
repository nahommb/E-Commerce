import './login_signup.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, validateToken } from '../../context/redux/auth/authAction';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const user = useSelector((state) => state.authReducer);

  
  useEffect(() => {
    dispatch(validateToken());
  }, [dispatch]);

  
  useEffect(() => {
    if (user?.isLoggedIn) {
      setShowPopup(true);
      // setTimeout(() => setShowPopup(false), 2000); // Auto-hide after 2 seconds
    }
  }, [user?.isLoggedIn]);

  useEffect(() => {
    if (user?.isValideToken) {
      navigate('/dashboard');
    }
  }, [user?.isValideToken, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginAction({
        email: email || 'leeopia11@gmail.com',
        password: password || '123456',
      })
    );
  };

  return (
    <>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
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
      </div>
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
