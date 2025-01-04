import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import './international.css'
import menBanner from '../../components/assets/boy_banner.png'
import { Banner } from "../../components/banner/banner"
import { Footer } from "../../components/footer/footer"
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
// import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"
import { getProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Paginate } from "../../components/paginate/paginate"
import { ItemContainer } from "../../components/item_container/item_container"
import { Brazil_logo,Spain_logo,Germany_logo,Italy_logo,Argentina_logo,Crotia_logo,England_logo,France_logo,Egypt_logo,Senegal_logo,Nezerlands_logo,Portugal_logo } from "../../comman/helper/images"


 export const International = ()=>{

    const products = useSelector((state)=>state.productData.products)
    const pageNumber = useSelector((state)=>state.productData.internationalPageNumber)
    console.log(pageNumber)
    
    const dispatch = useDispatch()

    const onPageChange = (e)=>{
        console.log(e.selected+1)
       
        dispatch(getProducts({
          category:'International'||'all',
          page:e.selected+1,
          limit:5
         }))
         const NewPageNumber= e.selected+1
          dispatch({type:'INTERNATIONALPAGENUMBER',payload:NewPageNumber})
        //  setPageNumber(e.selected+1)
      }

    const images = [Brazil_logo,Spain_logo,Germany_logo,Portugal_logo,Italy_logo,Argentina_logo,Crotia_logo,England_logo,Egypt_logo,Senegal_logo,Nezerlands_logo,France_logo]

    return <div>
        {/* <Navbar/> */}
         <div className="international-banner">
            <Banner images={images}/>
         </div>
        
        <ItemContainer category='International' pageNumber = {pageNumber}/>
        <Paginate pageCount={products.total_pages} onPageChange={onPageChange} pageNumber = {pageNumber}/>
        {
          products.length === 0 &&<div className="international-spacer"> </div>
        }
        
       
       <Footer/>
    </div>
}

