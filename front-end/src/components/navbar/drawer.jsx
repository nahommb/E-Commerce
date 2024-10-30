import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { BedroomBaby, BedroomChild, Boy, Girl, Menu, Shop } from '@mui/icons-material';
import './navbar.css'

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
        <p style={{marginBottom:'100px'}}>Lee Sports Wear</p>
          <Button>
            Shop
          </Button>
          <Button>
            Men
          </Button>
          <Button>
           Women
          </Button>
          <Button>
            Kids
          </Button>
        </div>
      </Drawer>
    </div>
  );
}


