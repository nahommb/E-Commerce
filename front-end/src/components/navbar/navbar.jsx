import React, { useEffect } from 'react'
import './navbar.css'
import { Menu, ShoppingCart } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { MyDrawer } from './drawer';
import { useState, } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { logout, valideteToken } from '../../context/redux/authentication-state/authenticationAction';
import { OverlayCard } from '../overlay_card/overlay_card';

export const Navbar = ()=>{

    const [isLoggedIn,setLoggedIn] = useState(false);

    
    const [showPopup, setShowPopup] = useState(false);
    const user = useSelector((state) => state.authenticationData.user);
    console.log(user)
    
    const valideToken = useSelector((state) => state.authenticationData.valideToken);
    const cart = useSelector((state) => state.cartReducer.cart);

    const dispatch = useDispatch()
    useEffect(() => { 

            console.log('checked correctly');
            dispatch(valideteToken());
      
    }, [dispatch]); 

    useEffect(() => {
        setLoggedIn(valideToken);
    }, [valideToken]); 

    const navigate = useNavigate()

    const overlayOnClick = () => {
           dispatch(logout())      
          window.location.reload();
      }
   

    return <div className='navbar'>
        <MyDrawer/>
        <div className='nav-log' onClick={()=>navigate('/')}>
             NIYA SPORTS WEAR
         
        </div>
        {showPopup?<OverlayCard showPopup={showPopup}
         title='Log out' 
         message = 'Are You Sure Want To Log out'
          button_text='Yes'
         onClick={overlayOnClick}
          />
        :<></>}
        <ul className='nav-menu'>
            <Link to={'/'} className='links'>Shop</Link>
            <Link to={'/international'} className='links'>International</Link>
            <Link to={'/others'} className='links'>Others</Link>
            <Link to={'/kids'} className='links'>Kids</Link>
            <Link to={'/retro'} className='links'>Retro</Link>
        </ul>
        <div className='nav-login-cart'>
            
            {isLoggedIn?
            <button className='button' onClick={()=>setShowPopup(true)}>Log out</button>
            :<button className='button' onClick={()=>navigate('/login_signup')}>Login</button>}    
            {isLoggedIn? <IconButton aria-label="cart" onClick={()=>navigate('/cart')}>
              <ShoppingCart sx={{ color: 'white' }}/>
               <span className='cart-number'>{cart.length!==0?cart.length:null}</span>
            </IconButton>:
            <></>
            } 
        </div>
    </div>
}

