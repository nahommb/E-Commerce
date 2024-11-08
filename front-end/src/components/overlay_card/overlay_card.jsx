import React, { useState } from 'react';
import { Button } from '@mui/material';

export const OverlayCard = (props)=>{

// const [showPopup, setShowPopup] = useState(props.showPopup);

    return <div style={styles.overlay}>
    <div style={styles.popup}>
      <h3 style={{color:'black'}}>{props.title}</h3>
      <p style={{color:'black'}}>{props.message}</p><br/>
      <Button onClick={props.onClick}>{props.button_text}</Button>
    </div>
  </div>
}

const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
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
     
    },
    popup: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      width: '300px',
     
    }
  };