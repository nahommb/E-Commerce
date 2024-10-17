import { useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import './login_signup.css'


export const LoginSignup = ()=>{

const [isLogin,setLogin] = useState(true);
const [isChecked,setChecked] = useState(false);

    return <>
          <Navbar/>
          <div className='login'>
               {
                 isLogin? <div>
                  <h4 style={{color:'green'}}>Login</h4>
                  
                 <form>
                    <input type='email' placeholder='Email'/><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <button type='submit'>Continue</button>
                 </form>
                  <p>Create an account? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(false)}>Click here</span></p>
               </div>:
               <div>
               <h4 style={{color:'green'}}>Signup</h4>                   
               <form>
                    <input type='email' placeholder='Email'/><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <input type='password' placeholder='Confirm Password'/><br/>
                    <button type='submit'>Continue</button>
                 </form>
                  <p>Already have an account? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(true)}>Login here</span></p><br/>
                  <input type='checkbox' checked={isChecked} onChange={(e)=>setChecked(e.target.checked)}></input>
                  <p style={{display:'inline',alignItems:'center'}}>By continuing I agree terms of use and privecy policy </p>
               </div>
               }
                
          </div>
    </>
}