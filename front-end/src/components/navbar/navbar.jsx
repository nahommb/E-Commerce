import './navbar.css'
import React from 'react'

export const Navbar = ()=>{
    return <div className='navbar'>
        <div className='nav-log'>
             logo
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <p>cart image</p>
        </div>
    </div>
}

