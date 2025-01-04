import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import './login_signup.css';
import { Footer } from '../../components/footer/footer';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Signup } from './signup';
import { login } from '../../context/redux/authentication-state/authenticationAction';
import { OverlayCard } from '../../components/overlay_card/overlay_card';
import CircularProgress from '@mui/material/CircularProgress';

export const LoginSignup = () => {
  const [isLogin, setLogin] = useState(true);

  const user = useSelector((state) => state.authenticationData.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login_error = useSelector((state) => state.authenticationData.loginError);
  const isLoading = useSelector((state) => state.authenticationData.isLoading);
  console.log(login_error !== null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const overlayOnClick = () => {
    setShowPopup(false);
    window.location.reload();
  };

  useEffect(() => {
    if (user) {
      navigate('/');
      window.location.reload();
    }
  }, [user]);

  const loginHandler = () => {
    console.log(email, password);
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    window.open("https://sports-wear.onrender.com/auth/google", "_self");
  };

  return (
    <>
      <div className="login">
        {isLoading && (
          <div style={styles.spinnerOverlay}>
            <CircularProgress />
          </div>
        )}

        {isLogin ? (
          <section className="login-section">
            <h3 style={{ color: 'green' }}>Login</h3>
            <p>Dress up and got your dreams</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('login');
                loginHandler();
              }}
            >
              <label>Email</label>
              <br />
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Button type="submit">Continue</Button>
              <Button onClick={handleGoogleLogin} style={{ backgroundColor: 'white', color: 'black' }}>
                <Google style={{ marginRight: '8px' }} />
                Continue with Google
              </Button>
            </form>
            <p>
              Create an account?{' '}
              <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setLogin(false)}>
                Click here
              </span>
            </p>

            {login_error !== null ? (
              <OverlayCard
                showPopup={showPopup}
                title="Login Error"
                message={login_error.message}
                button_text="Close"
                onClick={overlayOnClick}
              />
            ) : (
              <></>
            )}
          </section>
        ) : (
          <Signup />
        )}
      </div>
      <Footer />
    </>
  );
};

const styles = {
  spinnerOverlay: {
    position: 'fixed',
    top: 100,
    left: 20,
    width: '85vw',
    height: '30vh',
    backgroundColor: 'transparent', // Add a semi-transparent background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    boxShadow: '0 0px 0px ',
  },
};
