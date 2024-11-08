import React, { useEffect } from 'react'
import './navbar.css'
import { Menu, ShoppingCart } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { MyDrawer } from './drawer';
import { useState, } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { valideteToken } from '../../context/redux/authentication-state/authenticationAction';

export const Navbar = ()=>{

    const [isLoggedIn,setLoggedIn] = useState(false);

    const accessToken = localStorage.getItem('token');

    
    
    const valideToken = useSelector((state) => state.authenticationData.valideToken);

    const dispatch = useDispatch()
    useEffect(() => {
        if (accessToken) {
            console.log('checked correctly');
            dispatch(valideteToken());
        }
    }, [accessToken, dispatch]); 

    useEffect(() => {
        setLoggedIn(valideToken);
    }, [valideToken]); 

    const navigate = useNavigate()

   

    return <div className='navbar'>
        <MyDrawer/>
        <div className='nav-log'>
             Niya
            {/* <p>LEE</p> */}
        </div>
        <ul className='nav-menu'>
            <Link to={'/'} className='links'>Shop</Link>
            <Link to={'/men'} className='links'>Men</Link>
            <Link to={'/women'} className='links'>Women</Link>
            <Link to={'/kids'} className='links'>Kids</Link>
            <Link to={'/retro'} className='links'>Retro</Link>
        </ul>
        <div className='nav-login-cart'>
            <button className='button' onClick={()=>navigate('/login_signup')}>{isLoggedIn?'Log out':'Login'}</button>
            {isLoggedIn? <IconButton aria-label="cart" onClick={()=>navigate('/cart')}>
              <ShoppingCart sx={{ color: 'white' }}/>
            </IconButton>:
            <></>
            } 
        </div>
    </div>
}

