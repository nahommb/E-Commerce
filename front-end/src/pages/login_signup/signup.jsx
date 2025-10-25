import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register,verify } from '../../context/redux/authentication-state/authenticationAction';
import { Button, CircularProgress } from '@mui/material';
import { VERIFY } from '../../context/redux/constants';


const VerificationCard = React.memo(({register, code, setCode, onVerify }) => {
  const [timeLeft, setTimeLeft] = useState(3 * 60); // 3 minutes = 300 seconds
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft <= 0) return; // stop when timer reaches 0

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [timeLeft]);


 const handleResend = ()=>{
   // logic to resend code
   dispatch(register)
   setTimeLeft(3*60); // reset timer
 }

  // Convert seconds → mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={overlayStyles}>
      <div style={cardStyles}>
        <h3>Please Verify Your Account</h3>
        <p>Your verification code is sent to your email address</p>

        <p style={{ color: timeLeft > 0 ? "green" : "red", fontWeight: "bold",margin:'10px' }}>
          {timeLeft > 0 ? `Time left: ${formatTime(timeLeft)}` : "Code expired!"}
        </p>
         {timeLeft > 0?null:<button onClick={handleResend}>Resend</button>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onVerify(code);
          }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <input
            required
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "120px",
            }}
          />
          <button
            style={{
              ...buttonStyles,
              opacity: timeLeft <= 0 ? 0.5 : 1,
              pointerEvents: timeLeft <= 0 ? "none" : "auto",
            }}
            type="submit"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
});





export const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode,setVerificationCode] = useState('');


  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.authenticationData.isRegistered);
  const isRegisterLoading = useSelector((state)=>state.authenticationData.isRegisterLoading)
  const registerResponseMessage = useSelector((state)=>state.authenticationData.registerResponseMessage)
  const isRegisteredResponse = useSelector((state)=>state.authenticationData.isRegisteredResponse);
  const isVerificationResponse = useSelector((state)=>state.authenticationData.isVerificationResponse)
  const isVerified = useSelector((state)=>state.authenticationData.isVerified)
  const verificationMessage = useSelector((state)=>state.authenticationData.verificationMessage)

  const signupHandler = () => {
    if (confirmPassword === password ) {
      if(isChecked){
         dispatch(
        register({
          first_name,
          last_name,
          email,
          password,
        })
      );
      }
      else{
         alert('Please accept the terms and conditions')
      }
     
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
    // setShowPopup(false);
    dispatch({ type: 'RESET_VERIFY', payload: { isVerificationResponse: false } });
    dispatch({ type: 'RESET_REGISTER_RESPONSE' });
    // window.location.reload();
  };
 const handleVerify = (code)=>{
   setShowPopup(false);
   dispatch(
    verify({
    email,
    code
   }));
 }
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
 
  return (
    <>
      {isRegisterLoading && <section className='signup-progress'><CircularProgress/></section>}
         {showPopup ? (!isVerified ? (
        <VerificationCard
          register={register}
          userData={{ first_name, last_name, email, password }}
          code={verificationCode}
          setCode={setVerificationCode}
          onVerify={handleVerify}
        />
      ) : (
        <OverlayCard
          message={registerResponseMessage}
          onClose={overlayOnClose}
        />
      )):null}
      {isVerificationResponse && <OverlayCard message= {verificationMessage} onClose={overlayOnClose} />}
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
  width:'180px'
};
