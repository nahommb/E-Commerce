import { DetailBanner } from "../../components/detail_banner/detail_banner";
import { Navbar } from "../../components/navbar/navbar";
import { ItemCard } from "../../components/itemcard/itemcard";
import './retro.css'
import { Footer } from "../../components/footer/footer";
import ReactPaginate from 'react-paginate';

import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
// import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"
import { getProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { ItemContainer } from "../../components/item_container/item_container";
import { Paginate } from "../../components/paginate/paginate";



export const Retro = ()=>{
       
    const products = useSelector((state)=>state.productData.products)
    const pageNumber = useSelector((state)=>state.productData.retroPageNumber)
    console.log(pageNumber)

    const onPageChange = (e)=>{
        console.log(e.selected+1)
       
        dispatch(getProducts({
          category:props.category||'all',
          page:e.selected+1,
          limit:5
         }))
         const pageNumber= e.selected+1
          dispatch({type:'RETROPAGENUMBER',payload:pageNumber})
        //  setPageNumber(e.selected+1)
      }

    return <>
       
        <DetailBanner/>

        <ItemContainer category='Retro' pageNumber = {pageNumber}/>   
        
        <Paginate pageCount={products.total_pages} onPageChange={onPageChange} pageNumber = {pageNumber}/>
  
       
        <Footer/>
    </>
}