import './women.css'
import {ItemCard} from '../../components/itemcard/itemcard'
import { Navbar } from '../../components/navbar/navbar'
import womenBanner from '../../components/assets/women_banner.png'
import { Footer } from '../../components/footer/footer'
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
// import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"
import { getProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Paginate } from "../../components/paginate/paginate"
import { ItemContainer } from '../../components/item_container/item_container'


export const Women=()=>{

  const products = useSelector((state)=>state.productData.products)
  const pageNumber = useSelector((state)=>state.productData.othersPageNumber)
  console.log(pageNumber)
  
  const dispatch = useDispatch()

  const onPageChange = (e)=>{
      console.log(e.selected+1)
     
      dispatch(getProducts({
        category:props.category||'all',
        page:e.selected+1,
        limit:5
       }))
       const NewPageNumber= e.selected+1
        dispatch({type:'OTHERSPAGENUMBER',payload:NewPageNumber})
      //  setPageNumber(e.selected+1)
    }

    return <div>
        {/* <Navbar/> */}
        <div className="women-boarding">
        
          <div className="inner-boarding">
           <div  className='women-banner-text'>
            <h1>Wear your passion, <br/> <span style={{marginLeft:'10%'}}>wear your pride!</span></h1>
           </div>
           <img className='women-banner-image' src={womenBanner}></img>
          </div>
        </div>

        <ItemContainer category = 'Others' pageNumber = {pageNumber}/>
        <Paginate pageCount={products.total_pages} onPageChange={onPageChange} pageNumber = {pageNumber}/>

        <Footer/>
    </div>
}