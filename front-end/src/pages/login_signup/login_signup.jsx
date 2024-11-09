import { useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import './login_signup.css'
import { Footer } from '../../components/footer/footer';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';

import { useDispatch , useSelector } from 'react-redux';
import { Signup } from './signup';
import { login } from '../../context/redux/authentication-state/authenticationAction';



export const LoginSignup = ()=>{

const [isLogin,setLogin] = useState(true);
 


const dispatch = useDispatch()

const loginHandler = () => {
  
  dispatch(
    login({
      email :'nahomjr17@gmail.com',
      password:'123456'
    })
  )
  
}




    return <>
          {/* <Navbar/> */}
          
          <div className='login'>
               {
                 isLogin? <div>
          
                  <h3 style={{color:'green'}}>Login</h3>
                  <p>Dress up and got your dreams</p>
                 <form onSubmit={(e)=>{
                  e.preventDefault()
                  console.log('login')
                  loginHandler();
                  
                 }}>
                  <label>Email</label><br/>
                    <input type='email' placeholder='Email'/><br/>
                  <label>Password</label><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <Button type='submit'>Continue</Button>
                    <Button  style={{backgroundColor:'white',color:'black'}}><Google style={{marginRight:'8px'}}/>Continue with Google</Button>
                 </form>
                  <p>Create an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(false)}>Click here</span></p>
               </div>:
                <Signup/>
               }
          </div>
          <Footer/>
    </>
}
