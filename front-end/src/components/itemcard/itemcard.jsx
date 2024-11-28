import { useNavigate } from 'react-router-dom';
import './itemcard.css';
import { Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { OverlayCard } from '../overlay_card/overlay_card';
import { addToCart } from '../../context/redux/cart-state/cart_action';
import { imageUrl } from '../../context/helper/base_url';
import {motion } from 'framer-motion';


export const ItemCard = (props) => {
 
  const frontImage = imageUrl+props.items.product_images[0]
  const backImage = imageUrl+props.items.product_images[1]
  console.log('tesssss')
  console.log(backImage) 

  const divStyle = {
    backgroundImage: `url(${frontImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const itemCardInfoInline = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`,
    color: 'white',
    // height: '40%',
    borderRadius: '10px',
  };
  console.log(props.pageNumber)
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const valideToken = useSelector((state) => state.authenticationData.valideToken);
  
  useEffect(() => {
    setLoggedIn(valideToken);;
  }, [valideToken]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (event) => {
    event.stopPropagation(); 
     if(!isLoggedIn) {
      setShowPopup(true);
    }
    else{
      props.items.quantity = 1;
      props.items.total = props.items.price;
      props.items.date = Date.now();
      // console.log(props.items);
      dispatch(addToCart(props.items))
    }
    // Prevent navigation when button is clicked
    console.log('yesss');
  };

 
  const overlayOnClick = () => {
    setShowPopup(false);
      // window.location.reload();
  }

//  console.log(imageUrl+props.items.product_images[0]);
  return (
    <> {showPopup?<OverlayCard  
        title="You Need to login first" 
        button_text="ok" 
        onClick={overlayOnClick}
        />:<></>}
       <motion.div className="item-card" style={divStyle} 
         onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${backImage})`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${frontImage})`)}
    onClick={() => navigate(`/products/${props.items._id}`)}
    >

 
      <div className='button-container'>
        <Button
          className='item-card-button'
          onClick={handleButtonClick}
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'red',
            borderRadius: '25px',
            width: '120px',
            '&:hover': {
              backgroundColor: '#f5f5f5', // Change on hover
            },
          }}
        > 
          <ShoppingCart />
          {props.items.price} ETB
        </Button>
       
      </div>

      <div className='item-card-info' style={itemCardInfoInline}>
        <h4>{props.items.product_name} </h4>
        {/* <p>⭐⭐⭐⭐⭐ 5</p> */}
      </div>
    </motion.div>
    </>
   
  );
};
