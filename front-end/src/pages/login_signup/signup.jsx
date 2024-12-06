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

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

const signupHandler = (e) => {
         
          if(confirmPassword === password){
             dispatch(register({
            first_name:first_name,
            last_name:last_name,
            email: email,
            password: password
          })) 
         
          console.log(isRegistered);
          setShowPopup(isRegistered);
        }
        else{
          alert('password not matched')
        }
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
                    <input type='text' required= {true} placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/><br/>
                <label>Last Name</label><br/>
                    <input type='text' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/><br/>
               <label>Email</label><br/>
                    <input type='email' required= {true} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Password</label><br/>
                    <input type='password' required= {true} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/><br/>
                <label>Confirm Password</label><br/>
                    <input type='password' required= {true} placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
                    <Button type='submit'>Continue</Button>
                 </form>
                  <p>Already have an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>{window.location.reload();}}>Login here</span></p><br/>
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
