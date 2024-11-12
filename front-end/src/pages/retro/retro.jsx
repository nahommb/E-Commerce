import { DetailBanner } from "../../components/detail_banner/detail_banner";
import { Navbar } from "../../components/navbar/navbar";
import { ItemCard } from "../../components/itemcard/itemcard";
import './retro.css'
import { Footer } from "../../components/footer/footer";
import ReactPaginate from 'react-paginate';
import { Paginate } from "../../components/paginate/paginate";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"
import { getProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { ItemContainer } from "../../components/item_container/item_container";

export const Retro = ()=>{


    return <>
        {/* <Navbar/> */}
        <DetailBanner/>

        <ItemContainer/>   
        
        <Footer/>
    </>
}