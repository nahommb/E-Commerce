import './login_signup.css'

import { useDispatch , useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { register } from '../../context/redux/authentication-state/authenticationAction';
import { Button } from '@mui/material';
import { OverlayCard } from '../../components/overlay_card/overlay_card';

export const Signup = ()=>{

    const [showPopup, setShowPopup] = useState(false);
    const [isChecked,setChecked] = useState(false);
    const dispatch = useDispatch();


const signupHandler = () => {
        //  e.preventDefault();
          dispatch(register({
            first_name:'Biruk',
            last_name:'Elias',
            email: 'nahop665pl@gmail.com',
            password: '12097yh56'
          })) 
         
          console.log(isRegistered);
          setShowPopup(isRegistered);
        }

const isRegistered = useSelector((state) => state.authenticationData.isRegistered);
        useEffect(() => {
          if (isRegistered) {
            setShowPopup(true);
          }
        }, [isRegistered]); 

const overlayOnClick = () => {
  setShowPopup(false);
    window.location.reload();
}
        
    return <>
           <div>
               <h4 style={{color:'green'}}>Signup</h4>                   
               <form onSubmit={(e)=>{
                e.preventDefault();
                signupHandler();
               }}>
               <label>First Name</label><br/>
                    <input type='text' required= {true} placeholder='First Name'/><br/>
                <label>Last Name</label><br/>
                    <input type='text' placeholder='Last Name'/><br/>
               <label>Email</label><br/>
                    <input type='email' required= {true} placeholder='Email'/><br/>
                <label>Password</label><br/>
                    <input type='password' required= {true} placeholder='Password'/><br/>
                <label>Confirm Password</label><br/>
                    <input type='password' required= {true} placeholder='Confirm Password'/><br/>
                    <Button type='submit'>Continue</Button>
                 </form>
                  <p>Already have an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(true)}>Login here</span></p><br/>
                  <input type='checkbox' checked={isChecked} onChange={(e)=>setChecked(e.target.checked)}></input>
                  <p style={{display:'inline',alignItems:'center'}}>By continuing I agree terms of use and privecy policy </p>
               </div>
               {showPopup && (
                <OverlayCard title="Signup Successful" message="Your account has been created successfully." 
                button_text="Close"
                  onClick = {overlayOnClick}
                />
              )}
    </>
}
