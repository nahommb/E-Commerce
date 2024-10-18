import { Navbar } from '../../components/navbar/navbar'
import './products.css'

export const Products = ()=>{

    return <>
       <Navbar/>
        <div className="products">
            <div className="product-image">
                <div className='small-image'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <div className='big-image'>

                </div>
            </div>
            <div className="product-info">
                <h2>Barcelona away kit 24/25</h2>
                <p>$40</p>
                <p>sport wear for adult in variable environment cnditions</p>
                <p>Select size</p>
                 <div>
                    <button>XL</button>
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>

                 </div>
                <button>Add to cart</button>
            </div>
        </div>
    </>
}