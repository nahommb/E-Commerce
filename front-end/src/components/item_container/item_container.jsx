import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
// import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"
import { getProducts, getRecentProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Paginate } from "../../components/paginate/paginate"
import { ItemCard } from "../itemcard/itemcard";
import {motion } from 'framer-motion'



export const ItemContainer=(props)=>{


    const dispatch = useDispatch()
    // const [pageNumber , setPageNumber] = useState()
    // console.log(props.category)
    console.log(props.pageNumber)
    const pageNumber = props.pageNumber

       const products = useSelector((state)=>state.productData.products)
       console.log(products)
      const [isLoading,setIsLoading] = useState(true)
       
        useEffect(()=>{
        dispatch(getProducts({
         category:props.category||'all', 
         page:pageNumber,
         limit:12
        })) 
      
        },[dispatch])
      
        useEffect(()=>{
          setIsLoading(false)
        },[products])


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
      

        {isLoading?<Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
        </Box>: <div className="featured" >
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
        </div>
        }
        </motion.div>
        {/* <Paginate pageCount={products.total_pages} onPageChange={onPageChange}/> */}
</>
}