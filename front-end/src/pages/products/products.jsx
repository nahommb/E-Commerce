import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProduct } from '../../context/redux/product-state/product_action';
import { Footer } from '../../components/footer/footer';
import './products.css';
import { addToCart } from '../../context/redux/cart-state/cart_action';
import { OverlayCard } from '../../components/overlay_card/overlay_card';

export const Products = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const product = useSelector((state) => state.productData.findedProduct);
    const [mainImage, setMainImage] = useState('');
    const [imageList, setImageList] = useState({});
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [size,setSize] = useState('L');
    const [customePrint,setCustomePrint] = useState('')
    const [showPopup, setShowPopup] = useState(false);

    const [isLoggedIn,setLoggedIn] = useState(false);

  
    const valideToken = useSelector((state) => state.authenticationData.valideToken);
    
    useEffect(() => {
      setLoggedIn(valideToken);;
    }, [valideToken]);
    
    useEffect(() => {
        dispatch(findProduct({_id: id}));
    }, [dispatch, id]);

    // Update mainImage when product is fetched and it has images
    useEffect(() => {
        if (product && product.product_images?.length > 0) {
            setMainImage(`${product.product_images[0]}`);
            setImageList({
                frontImage: `${product.product_images[0]}`,
                backImage: `${product.product_images[1]}`,
                rightImage: `${product.product_images[2]}`,
                leftImage: `${product.product_images[3]}`
            });
            console.log(imageList)
        }
    }, [product]);

    const imageChanger = (image) => {
        setMainImage(image);
    };

    const handleButtonClick = (size) => {
        setSize(size);
        
        setSelectedSize(size); // Set the selected size
    };

    if (!product) {
        return <p>Loading...</p>; // Render loading or placeholder
    }
    const handleAddToCart = () => {
        if(!isLoggedIn){
            setShowPopup(true)
        }
        else{
         const newProduct = {
          ...product,         // Copy existing product details
          quantity: quantity, // Use the updated quantity
          total: quantity * parseInt(product.price),
          custom_print: customePrint,
          size:size,
          date:Date.now() 
      };
  
      console.log(newProduct); // Log the new product for debugging
      dispatch(addToCart(newProduct)); 
        }
      // Create a new product object to avoid mutation

  };

  const overlayOnClick = () => {
    setShowPopup(false);
      // window.location.reload();
  }
    return (
        <>
        {showPopup?<OverlayCard  
        title="You Need to login first" 
        button_text="ok" 
        onClick={overlayOnClick}
        />:<></>}
            <div className="products">
                <div className="product-image">
                    <div className='small-image'>
                        <div onClick={() => imageChanger(imageList.frontImage)}>
                            <img src={imageList.frontImage} alt='Front Image' />
                        </div>
                        {imageList.backImage==='undefined'?<></>:<div onClick={() => imageChanger(imageList.backImage)}>
                            <img src={imageList.backImage} alt='Back Image' />
                        </div>} 
                        {imageList.rightImage==='undefined'?<></>:<div onClick={() => imageChanger(imageList.rightImage)}>
                            <img src={imageList.rightImage} alt='Side Image' />
                        </div>}
                          {imageList.leftImage==='undefined'?<></>:<div onClick={() => imageChanger(imageList.leftImage)}>
                            <img src={imageList.leftImage} alt='Side Image' />
                        </div>}
                    </div>
                    <div className='big-image'>
                        {mainImage && <img src={mainImage} alt='Main Image' />}
                    </div>
                </div>
                
                <div className="product-info">
                  
                    <h1>{product.product_name}</h1>
                    <p className='price-text'>{product.price} ETB</p>
                    <p>Custom printing</p>
                    <input placeholder='Enter Name and Number' onChange={(e)=>setCustomePrint(e.target.value)}/>
                    <p>Quantity</p>
                    <input type='number' placeholder='1' onChange={(e)=>setQuantity(e.target.value)}/>
                    <p>Select size</p>
                    <div>
                        {['XL', 'L', 'M', 'S'].map((size) => (
                            <button
                                key={size}
                                onClick={() => handleButtonClick(size)}
                                style={{
                                    backgroundColor: selectedSize === size ? 'black' : 'white',
                                    color: selectedSize === size ? 'white' : 'black',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    margin: '5px',
                                    padding: '8px 16px',
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <Button onClick={()=>handleAddToCart()}>Add to cart</Button>
                </div>
            </div>
            <Footer />
        </>
    );
};
