import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { BedroomBaby, BedroomChild, Boy, Girl, Menu, Shop } from '@mui/icons-material';
import './navbar.css'
import { Link } from 'react-router-dom';

export const MyDrawer = ()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <div className='mobile-navbar'>
      <Button style={{color:'white'}} onClick={toggleDrawer(true)}><Menu/></Button>
      <p>Lee Sports Wear</p>
      <p>test</p>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        
        <div className='drawer-button-container'>
        <p style={{marginBottom:'60px'}}>Lee Sports Wear</p>
         <Link to={'/'} className='links'>
           <Button>
            Shop
          </Button>
         </Link>
          <Link to={'/men'} className='links'>
            <Button>
            Men
          </Button>
          </Link>
          <Link to={'/women'} className='links'>
            <Button>
           Women
          </Button>
          </Link>
          <Link to={'/kids'} className='links'>
           <Button>
            Kids
          </Button>
          </Link>
          <Link to={'/retro'} className='links'>
           <Button>
            Retro
          </Button>
          </Link>
          <Button style={{
            backgroundColor:'black',
            color:'white',
            borderRadius:'10px',
            fontSize:'13px',
            padding:'15px',
            width:'80%',
            justifyContent:'center',
            }} onClick={()=>navigate('/login_signup')}>Login</Button>
        </div>
      </Drawer>
    </div>
  );
}


