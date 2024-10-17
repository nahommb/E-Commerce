import React from 'react'
import './navbar.css'
import { ShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


export const Navbar = ()=>{

    const navigate = useNavigate()



    return <div className='navbar'>
        <div className='nav-log'>
             logo
            <p>LEE</p>
        </div>
        <ul className='nav-menu'>
            <Link to={'/'} className='links'>Shop</Link>
            <Link to={'/men'} className='links'>Men</Link>
            <Link to={'/women'} className='links'>Women</Link>
            <Link to={'/kids'} className='links'>Kids</Link>
        </ul>
        <div className='nav-login-cart'>
            <button onClick={()=>navigate('/login_signup')}>Login</button>
            <IconButton aria-label="cart">
              <ShoppingCart sx={{ color: 'white' }}/>
            </IconButton>
        </div>
    </div>
}

