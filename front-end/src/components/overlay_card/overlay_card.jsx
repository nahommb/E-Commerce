import React, { useState } from 'react';
import { Button } from '@mui/material';

export const OverlayCard = (props)=>{

// const [showPopup, setShowPopup] = useState(props.showPopup);

    return <div style={styles.overlay}>
    <div style={styles.popup}>
      {props.title === 'Order'?<div>
      <h3 style={{color:'black'}}>{props.title}</h3>
       <form>
        <input type='text' required placeholder='Enter your name'/><br/>
        <input type='text'  required placeholder='Enter your address'/><br/>
        <input type='text'  required  placeholder='Enter your phone number'/><br/>
        <Button style={{color:'green'}} type='submit' onClick={props.onClick} >{props.button_text}</Button>
        <Button style={{color:'red'}} onClick={props.onCancel} >Cancel</Button>
       </form>
     
      </div>: 
      <div><h3 style={{color:'black'}}>{props.title}</h3>
      <p style={{color:'black'}}>{props.message}</p><br/>
      <Button onClick={props.onClick}>{props.button_text}</Button></div>
      }
     
    </div>
  </div>
}

const styles = {
    overlay: {
      position: 'fixed',
      top: 100,
      left: '20%',
      right: '10%',
      height:'300px',
      bottom: 0,
      borderRadius:0,
      border:'none',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },
    popup: {
      backgroundColor: 'whitesmoke',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      width: '300px',
     
    }
  };