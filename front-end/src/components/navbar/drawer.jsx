import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { BedroomBaby, BedroomChild, Boy, Girl, Menu, Shop, ShoppingBag } from '@mui/icons-material';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../context/redux/authentication-state/authenticationAction';
import { OverlayCard } from '../overlay_card/overlay_card';

export const MyDrawer = ()=>{
  
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const dispatch = useDispatch();

  const logOutHandler = ()=>{
    setShowPopup(false);
    dispatch(logout())
    
  }

  const onCancelLogout = ()=>{
    setShowPopup(false);
  }

  const user = useSelector((state) => state.authenticationData.user);
  

  return (
    <div className='mobile-navbar'>
      <Button style={{color:'white'}} onClick={toggleDrawer(true)}><Menu/></Button>
      <p>NIYA SPORTS WEAR</p>
      <p>{user?.first_name}</p>
       {user && <Box><ShoppingBag/></Box>}
       {showPopup && (
        <OverlayCard
          title='Log out' 
         message = 'Are You Sure Want To Log out'
          button_text='Yes'
         onClick={logOutHandler}
         onCancel={onCancelLogout}
        />
      )}
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        
        <div className='drawer-button-container'>
        <p style={{marginBottom:'60px'}}>NIYA SPORTS WEAR</p>
         <Link to={'/'} className='links' onClick={toggleDrawer(false)}>
           <Button >
            Shop
          </Button>
         </Link>
          <Link to={'/international'} className='links' onClick={toggleDrawer(false)}>
            <Button >
            International
          </Button>
          </Link>
          <Link to={'/others'} className='links' onClick={toggleDrawer(false)}>
            <Button >
           Others
          </Button>
          </Link>
          <Link to={'/kids'} className='links' onClick={toggleDrawer(false)}>
           <Button >
            Kids
          </Button>
          </Link>
          <Link to={'/retro'} className='links'onClick={toggleDrawer(false)} >
           <Button >
            Retro
          </Button>
          </Link>
         {user === null? <Link to={'/login_signup'} className='links' onClick={toggleDrawer(false)}>
          <Button style={{
            backgroundColor:'black',
            color:'white',
            borderRadius:'10px',
            fontSize:'13px',
            padding:'15px',
            width:'80%',
            justifyContent:'center',
            }} onClick={()=>navigate('/login_signup')}>Login</Button>
            </Link>:<Box onClick={()=>{
                setIsOpen(false)
               setShowPopup(true)
            }
            }>
              <Button
             
            style={{
              backgroundColor:'red',
              color:'white',
              borderRadius:'10px',
              fontSize:'13px',
              padding:'15px',
              width:'80%',
              justifyContent:'center',
              }}
              >Log Out</Button></Box>
            }
            {/* {user && } */}
        </div>
      </Drawer>
    </div>
  );
}


