import './login_signup.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, validateToken } from '../../context/redux/auth/authAction'
import { useEffect ,useState} from 'react'


export const Login = () => {

    const navigate = useNavigate()  
    const dispatch = useDispatch()
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const user  = useSelector(state => state.authReducer)
  
   
    useEffect(()=>{
        dispatch(validateToken())
    },[])
    

    useEffect(()=>{
        if(user?.isLoggedIn){
            console.log(user) 
            navigate('/dashboard')      
        }
        else{}
    },[user])

    const loginHandler =(e)=>{
        e.preventDefault()
        dispatch(loginAction({
            email:email,
            password:password
        }))
        window.location.reload();
    }
  return <>
    <div className='login'> 
    <div>
          <h3 style={{color:'green'}}>Login</h3>
          <p>Dress up and got your dreams</p>
         <form onSubmit={loginHandler}>
          <label>Email</label><br/>
            <input type='email' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Password</label><br/>
            <input type='password' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} /><br/>
            <button type='submit'>Login</button>
         </form>
    </div>         
       </div>
  </>
}