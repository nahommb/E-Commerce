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
   console.log(user)
   
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
            email:'leeopia11@gmail.com',
            password:'123456'
        }))
        console.log('test')
       // window.location.reload();
    }
  return <>
    <div className='login'> 
    <div>
          <h3 style={{color:'green'}}>Login</h3>
          <p>Dress up and got your dreams</p>
         <form onSubmit={loginHandler}>
          <label>Email</label><br/>
            <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Password</label><br/>
            <input type='password' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} /><br/>
            <button type='submit'>Login</button>
         </form>
    </div>         
       </div>
  </>
}