import { useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import './login_signup.css'
import { Footer } from '../../components/footer/footer';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';

import { Signup } from './signup';




export const LoginSignup = ()=>{

const [isLogin,setLogin] = useState(true);



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


// console.log(isRegistered)







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
                <Signup/>
               }
          </div>
          <Footer/>
    </>
}
