import './navbar.css'
import React from 'react'

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
            <p>cart image</p>
        </div>
    </div>
}

