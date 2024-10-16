import { Navbar } from '../../components/navbar/navbar'
import './login.css'

export const Login = ()=>{

    return <>
          <Navbar/>
          <div className='login'>
               <div>
                <h4>Login</h4>
                 <form>
                    <input type='email' placeholder='Email'/><br/>
                    <input type='password' placeholder='Password'/><br/>
                    <button type='submit'>Continue</button>
                 </form>
                  <p>Create an account? click here</p>
               </div>
                
          </div>
    </>
}