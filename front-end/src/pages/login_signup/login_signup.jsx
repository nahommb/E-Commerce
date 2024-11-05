import { useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import './login_signup.css'
import { Footer } from '../../components/footer/footer';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { register } from '../../context/redux/authentication-state/authenticationAction';
import { useDispatch , useSelector } from 'react-redux';




export const LoginSignup = ()=>{

const [isLogin,setLogin] = useState(true);
const [isChecked,setChecked] = useState(false);


// const loginHandler = () => {
//   axios.post(
//     'http://localhost:3000/api/user/login', 
//     { 
//       email: 'nahomjr17@gmail.com',
//       password: '123456' // Ensure you're using the correct key name (e.g., 'password')
//     },
//     {
//       withCredentials: true
//     }
//   )
//   .then(response => {
//     console.log('Data posted:', response.data.updatedUser.email);
//     localStorage.setItem('token',response.data.updatedUser.refreshToken);
//     navigate('/securepage')
//   })
//   .catch(error => {
//     console.error('Error posting data:', error);
//   });
// }
const isRegistered = useSelector((state) => state.authenticationData.isRegistered);

// console.log(isRegistered)

const [showPopup, setShowPopup] = useState(false);

const dispatch = useDispatch();

const signupHandler = () => {
//  e.preventDefault();
  dispatch(register({
    first_name:'Nahom',
    last_name:'Mb',
    email: 'nahomj9ko5p@gmail.com',
    password: '12097yh56'
  })) 
 
  console.log(isRegistered);
  setShowPopup(isRegistered);
}
useEffect(() => {
  if (isRegistered) {
    setShowPopup(true);
  }
}, [isRegistered]); 

    return <>
          <Navbar/>
          
          <div className='login'>
               {
                 isLogin? <div>
          
                  <h3 style={{color:'green'}}>Login</h3>
                  <p>Dress up and got your dreams</p>
                 <form >
                  <label>Email</label><br/>
                    <input type='email' placeholder='Email'/><br/>
                  <label>Password</label><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <Button  onClick={()=>{
                      console.log('login')
                      // loginHandler();
                    }}>Continue</Button>
                    <Button style={{backgroundColor:'white',color:'black'}}><Google style={{marginRight:'8px'}}/>Continue with Google</Button>
                 </form>
                  <p>Create an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(false)}>Click here</span></p>
               </div>:
               <div>
               <h4 style={{color:'green'}}>Signup</h4>                   
               <form>
               <label>Email</label><br/>
                    <input type='email' placeholder='Email'/><br/>
                <label>Password</label><br/>
                    <input type='password' placeholder='Password'/><br/>
                <label>Confirm Password</label><br/>
                    <input type='password' placeholder='Confirm Password'/><br/>
                    <Button  onClick={()=>{
                      signupHandler();
                    }}>Continue</Button>
                 </form>
                  <p>Already have an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(true)}>Login here</span></p><br/>
                  <input type='checkbox' checked={isChecked} onChange={(e)=>setChecked(e.target.checked)}></input>
                  <p style={{display:'inline',alignItems:'center'}}>By continuing I agree terms of use and privecy policy </p>
               </div>
               }
                {showPopup && (
                <div style={styles.overlay}>
                  <div style={styles.popup}>
                    <h3>Registration Successful</h3>
                    <p>You are successfully registered!</p><br/>
                    <Button onClick={()=>{
                      setShowPopup(false)
                        window.location.reload();
                        }
                        }>Close</Button>
                  </div>
                </div>
              )}
          </div>
          <Footer/>
    </>
}
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: '20%',
    right: '10%',
    height:'300px',
    bottom: 0,
    borderRadius:0,
    border:'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '300px',
  }
};