import { Button } from '@mui/material';
import { ronaldoCeneter, ronaldoFront,ronaldoLeft,ronaldoRight } from '../../comman/helper/images'
import { Navbar } from '../../components/navbar/navbar'
import './products.css'
import { Footer } from '../../components/footer/footer';
import { useState } from 'react';




export const Products = ()=>{

const [mainImage, setMainImage] = useState(ronaldoFront);
const imageChanger = (image)=>{
    setMainImage(image)
}

    return <>
       <Navbar/>
        <div className="products">
            <div className="product-image">
                <div className='small-image'>
                        <div onClick={()=>imageChanger(ronaldoFront)}>
                            <img src={ronaldoFront}></img>
                        </div>
                        <div onClick={()=>imageChanger(ronaldoCeneter)}>
                            <img src={ronaldoCeneter}></img>
                        </div>
                        <div onClick={()=>imageChanger(ronaldoRight)}>
                            <img src={ronaldoRight}></img>
                        </div>
                        <div onClick={()=>imageChanger(ronaldoLeft)}>
                            <img src={ronaldoLeft}></img>
                        </div>
                </div>
                <div className='big-image'>
                    <img src={mainImage}></img>
                </div>
            </div>
            <div className="product-info">
                <h1>Brazil world cup home kit 24/25</h1>
                <p className='price-text'>2499 ETB</p>
                {/* <p>sport wear for adult in variable environment cnditions</p> */}
                <p>Custom printing</p>
                <input placeholder='Enter Name and Number'/>
                <p>Select size</p>
                 <div>
                    <button>XL</button>
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>

                 </div>
                <Button>Add to cart</Button>
            </div>
        </div>
        <Footer/>
    </>
}