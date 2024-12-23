import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";

import { getProducts, getRecentProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Paginate } from "../../components/paginate/paginate"
import { ItemCard } from "../itemcard/itemcard";
import {motion } from 'framer-motion'
import './item_container.css'


export const ItemContainer=(props)=>{


    const dispatch = useDispatch()
 
    const pageNumber = props.pageNumber

       const products = useSelector((state)=>state.productData.products)
       
        useEffect(()=>{
        dispatch(getProducts({
         category:props.category||'all', 
         page:pageNumber,
         limit:12
        })) 
      
        },[dispatch])
      

if(products.length===0){
  return <Box display="flex" justifyContent="center" alignItems="center" height="20vh">
  <CircularProgress />
</Box>
}

return <>
        <motion.div className="item-container"
         
        variants = {{
          hidden:{
            opacity:0,
       
          },
          show:{
            opacity:1,
          
            transition:{
              staggerChildren:0.25,
            }
          }
        }} 
        initial = 'hidden'
        animate = 'show'
        >
      
       {/* <div className="" > */}
          {products.products?.map((item)=>{
      
            return <motion.div
                variants={{
                    hidden: {
                      opacity: 0,
                    },
                    show: {
                      opacity: 1,
                  
                    },
                  }}
                
            >
              <ItemCard key={item._id} items={item} ></ItemCard>
            </motion.div> 
          })    
          }
        {/* </div> */}
       
        </motion.div>
      
</>
}