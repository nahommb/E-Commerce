import React from 'react'
import './navbar.css'
import { ShoppingCart } from '@mui/icons-material';
import { IconButton } from '@mui/material';


export const Navbar = ()=>{
    return <div className='navbar'>
        <div className='nav-log'>
             logo
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <p>Shop</p>
            <p>Men</p>
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

