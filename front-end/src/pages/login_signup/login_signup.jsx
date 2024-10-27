import { useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import './login_signup.css'
import { Footer } from '../../components/footer/footer';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';


export const LoginSignup = ()=>{

const [isLogin,setLogin] = useState(true);
const [isChecked,setChecked] = useState(false);

    return <>
          <Navbar/>
          
          <div className='login'>
               {
                 isLogin? <div>
          
                  <h3 style={{color:'green'}}>Login</h3>
                  <p>Dress up and got your dreams</p>
                 <form>
                  <label>Email</label><br/>
                    <input type='email' placeholder='Email'/><br/>
                  <label>Password</label><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <Button type='submit'>Continue</Button>
                    <Button style={{backgroundColor:'white',color:'black'}}><Google style={{marginRight:'8px'}}/>Continue with Google</Button>
                 </form>
                  <p>Create an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(false)}>Click here</span></p>
               </div>:
               <div>
               <h4 style={{color:'green'}}>Signup</h4>                   
               <form>
                    <input type='email' placeholder='Email'/><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <input type='password' placeholder='Confirm Password'/><br/>
                    <button type='submit'>Continue</button>
                 </form>
                  <p>Already have an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(true)}>Login here</span></p><br/>
                  <input type='checkbox' checked={isChecked} onChange={(e)=>setChecked(e.target.checked)}></input>
                  <p style={{display:'inline',alignItems:'center'}}>By continuing I agree terms of use and privecy policy </p>
               </div>
               }
                
          </div>
          <Footer/>
    </>
}