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


 const orderHandler = ()=>{
  props.onClick({
    name:name,
    phone:phone,
    address:address
  })
  setIsLoading(true)
 }

    return <div style={styles.overlay}>
    <div style={styles.popup}>
     {isLoading?<div style={{}}><CircularProgress/></div>:<div>
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
     
      </>: 
      <><h3 style={{color:'black'}}>{props.title}</h3>
      <p style={{color:'black'}}>{props.message}</p><br/>
      <Button onClick={props.onClick}>{props.button_text}</Button>
      <Button style={{color:'red'}} onClick={props.onCancel} >Cancel</Button>
      </>
      
      }</div>}
 
     
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