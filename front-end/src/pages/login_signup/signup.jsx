import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../context/redux/authentication-state/authenticationAction';
import { Button, CircularProgress } from '@mui/material';

export const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.authenticationData.isRegistered);
  const isRegisterLoading = useSelector((state)=>state.authenticationData.isRegisterLoading)
  const registerResponseMessage = useSelector((state)=>state.authenticationData.registerResponseMessage)
  const isRegisteredResponse = useSelector((state)=>state.authenticationData.isRegisteredResponse)
 
  
  const signupHandler = () => {
    if (confirmPassword === password) {
      dispatch(
        register({
          first_name,
          last_name,
          email,
          password,
        })
      );
    } else {
      alert('Password does not match');
    }
  };

  useEffect(() => {
    if (isRegisteredResponse) {
      setShowPopup(true);
    }
  }, [isRegisteredResponse]);
 
  const overlayOnClose = () => {
    setShowPopup(false);
    dispatch({ type: 'RESET_REGISTER_RESPONSE' });
    // window.location.reload();
  };

  // Inline OverlayCard Component
  const OverlayCard = ({ message, onClose }) => (
    <div style={overlayStyles}>
      <div style={cardStyles}>
        <p>{message}</p>
        <button style={buttonStyles} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );

  // Styles
 
  return (
    <>
      {isRegisterLoading && <section className='signup-progress'><CircularProgress/></section>}
      {showPopup && <OverlayCard message={registerResponseMessage} onClose={overlayOnClose} />}
      <div>
        <h4 style={{ color: 'green' }}>Signup</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler();
          }}
        >
          <label>First Name</label>
          <br />
          <input
            type="text"
            required
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <Button type="submit">Continue</Button>
        </form>
        <p>
          Already have an account?{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Login here
          </span>
        </p>
        <br />
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p style={{ display: 'inline', alignItems: 'center' }}>
          By continuing I agree to the terms of use and privacy policy.
        </p>
      </div>

    </>
  );
};
const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '40%',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  boxShadow: '0 0px 0px rgba(0, 0, 0, 0)'
};

const cardStyles = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  marginRight: '10%',
  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '400px',
  width: '60%',
  // height: '90px',
};

const buttonStyles = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  marginTop: '20px',
  padding: '10px 10px',
  fontSize: '12px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};
