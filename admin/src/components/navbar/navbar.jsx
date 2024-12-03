import { useSelector } from 'react-redux';
import './navbar.css';

export const NavBar = ()=>{

    const user  = useSelector((state)=>state.authReducer.user);

    return <>
        <div className="navbar">
           <div className='logo'>
                Admin
           </div>
           <div className='admin-image'>
                {user.first_name}
           </div>
        </div>
    </>
}