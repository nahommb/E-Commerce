import { useEffect, useState } from 'react'
import { Navbar } from '../../components/navbar/navbar'
import './login_signup.css'
import { Footer } from '../../components/footer/footer';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { Signup } from './signup';
import { login } from '../../context/redux/authentication-state/authenticationAction';
import { OverlayCard } from '../../components/overlay_card/overlay_card';



export const LoginSignup = ()=>{

const [isLogin,setLogin] = useState(true);
 
const user = useSelector((state) => state.authenticationData.user);
console.log(user)
const navigate = useNavigate();
const dispatch = useDispatch()

const login_error = useSelector((state) => state.authenticationData.loginError);
console.log(login_error!==null)

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [showPopup, setShowPopup] = useState(false);

const overlayOnClick = () => {
  setShowPopup(false);
    window.location.reload();
}


  useEffect(() => {
    if (user) {     
      navigate('/')
      window.location.reload();
    }
  }, [user]);

  const loginHandler = () => {
    console.log(email,password)
    dispatch(
      login({
        email :email,
        password:password
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
                    <input type='email' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/><br/>
                  <label>Password</label><br/>
                    <input type='password' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/><br/>
                    <Button type='submit'>Continue</Button>
                    <Button  style={{backgroundColor:'white',color:'black'}}><Google style={{marginRight:'8px'}}/>Continue with Google</Button>
                 </form>
                  <p>Create an account ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(false)}>Click here</span></p>

                  {
                    login_error!==null?
                    <OverlayCard showPopup={showPopup} title='Login Error' button_text='Close' onClick={overlayOnClick} />
                  :<></>
                  }
               </div>:
                <Signup/>
               }
          </div>
          <Footer/>
    </>
}
