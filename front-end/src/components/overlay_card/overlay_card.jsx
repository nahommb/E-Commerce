import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

export const OverlayCard = (props)=>{

// const [showPopup, setShowPopup] = useState(props.showPopup);
const [name,setName] = useState('')
const [phone,setPhone] = useState('')
const [address,setAddress] = useState('')
const [isLoading,setIsLoading] = useState(false)


console.log(props.title)

if(props.title === 'Order response'){

  setIsLoading(false)
}

const isSmallScreen = window.matchMedia("(max-width: 480px)").matches;

const styles = {
  overlay: {
    position: 'fixed',
    top: 100,
    left: isSmallScreen ? '10%' : '40%',
    right: isSmallScreen ? '10%' : '50%',
    height:'300px',
    width:  isSmallScreen? '300px':'400px',
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
    backgroundColor: 'transparent',
    padding: '20px',
    // height: '130px',
    borderRadius: '8px',
    textAlign: 'center',
    width: isSmallScreen? '300px':'400px',
    boxShadow: 'none',
   
  }
  
};
 const orderHandler = ()=>{
  props.onClick({
    name:name,
    phone:phone,
    address:address
  })
  setIsLoading(true)
 }

    return <section style={styles.overlay}>
    <div style={styles.popup}>
     {isLoading?<div><CircularProgress/></div>:<div>
      {props.title === 'Order'?<>
      <h3 style={{color:'black'}}>{props.title}</h3>
       <form onSubmit={(e)=>{
        e.preventDefault()
        orderHandler()
        }}>
        <input type='text' required placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/><br/>
        <input type='text'  required placeholder='Enter your address' onChange={(e)=>setAddress(e.target.value)}/><br/>
        <input type='text'  required  placeholder='Enter your phone number' onChange={(e)=>setPhone(e.target.value)}/><br/>
        <Button style={{color:'green'}} type='submit'>{props.button_text}</Button>
        <Button style={{color:'red'}} onClick={props.onCancel} >Cancel</Button>
       </form>
     
      </>: (
        props.title !== 'Login Error'?<div style={{backgroundColor:'whiteSmoke',padding:'10px'}}>
      <h3 style={{color:'black'}}>{props.title}</h3>
      <p style={{color:'black'}}>{props.message}</p><br/>
      <Button onClick={props.onClick}>{props.button_text}</Button>
      {props.onCancel && <Button style={{color:'red'}} onClick={props.onCancel} >Cancel</Button>}
      </div>:<>
      <h3 style={{color:'black'}}>{props.title}</h3>
      <p style={{color:'black'}}>{props.message}</p><br/>
      <Button onClick={props.onClick}>{props.button_text}</Button>
      {props.onCancel && <Button style={{color:'red'}} onClick={props.onCancel} >Cancel</Button>} 
      </>
      )
    
      
      }</div>}
 
     
    </div>
  </section>
}

