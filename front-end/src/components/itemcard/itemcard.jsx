import { useNavigate } from 'react-router-dom';
import './itemcard.css';
import { Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

export const ItemCard = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.frontImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const itemCardInfoInline = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`,
    color: 'white',
    height: '40%',
    borderRadius: '10px',
  };

  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Prevent navigation when button is clicked
    console.log('yesss');
  };

  return (
    <div className="item-card" style={divStyle} 
         onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${props.backImage})`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${props.frontImage})`)}
    onClick={() => navigate(`/products/${props.index}`)}>
      <div className='button-container'>
        <Button
          className='item-card-button'
          onClick={handleButtonClick}
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'red',
            borderRadius: '25px',
            width: '110px',
            '&:hover': {
              backgroundColor: '#f5f5f5', // Change on hover
            },
          }}
        >
          <ShoppingCart />
          $50
        </Button>
      </div>

      <div className='item-card-info' style={itemCardInfoInline}>
        <h4>{props.index} Barcelona away kit 24/25 </h4>
        <p>⭐⭐⭐⭐⭐ 5</p>
      </div>
    </div>
  );
};
