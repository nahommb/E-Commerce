import React from 'react'
import './navbar.css'
import { ShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export const Navbar = ()=>{
    return <div className='navbar'>
        <div className='nav-log'>
             logo
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <Link to={'/'}>Shop</Link>
            <Link to={'/men'}>Men</Link>
            <p>Women</p>
            <p>Kids</p>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <IconButton aria-label="cart">
              <ShoppingCart sx={{ color: 'white' }}/>
            </IconButton>
        </div>
    </div>
}

