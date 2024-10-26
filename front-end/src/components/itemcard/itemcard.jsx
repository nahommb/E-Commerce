import { useNavigate } from 'react-router-dom'
import './itemcard.css'
import { Button } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

export const ItemCard =(props)=>{

  const divStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    
  };
  const itemCardInfoInline = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0,1))`,
    color: 'white',
    height:'40%',
    borderRadius: '10px',
    
  };
    const navigate = useNavigate()

  return <div className="item-card" style={divStyle} onClick={()=>navigate(`/products/${props.index}`)}>
     {/* <div className='item-card-image'>
     <img src={props.image}></img>
     </div> */}
     
     <div className='button-container' onClick={()=>console.log('yesss')}>
      <Button className='item-card-button' variant='contained'   sx={{
      backgroundColor: 'white',
      color: 'red',
      borderRadius: '25px',
      width: '110px',
      // border: '2px solid red',
      '&:hover': {
      backgroundColor: '#f5f5f5', // Change on hover
    }
  }}>
      <ShoppingCart/>
      $50
     </Button>
     </div>

     <div className='item-card-info' style={itemCardInfoInline}>
          
         <h4>{props.index} Barcelona away kit 24/25 </h4>
         <p>⭐⭐⭐⭐⭐ 5</p>
     </div>
    
  </div>
}