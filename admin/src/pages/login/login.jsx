import './login_signup.css'
import {useNavigate} from 'react-router-dom'


export const Login = () => {

    const navigate = useNavigate()  

    const loginHandler =(e)=>{
        e.preventDefault()
        navigate('/dashboard')
    }
  return <>
    <div className='login'> 
    <div>
          <h3 style={{color:'green'}}>Login</h3>
          <p>Dress up and got your dreams</p>
         <form onSubmit={loginHandler}>
          <label>Email</label><br/>
            <input type='email' placeholder='Email' required /><br/>
          <label>Password</label><br/>
            <input type='password' placeholder='Password' required /><br/>
            <button type='submit'>Login</button>
         </form>
    </div>  
      
         
       </div>
  </>
}