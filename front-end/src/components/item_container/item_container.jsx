import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"
import { getProducts } from "../../context/redux/product-state/product_action";
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Paginate } from "../../components/paginate/paginate"
import { ItemCard } from "../itemcard/itemcard";

export const ItemContainer=(props)=>{


    const dispatch = useDispatch()
    // const [pageNumber , setPageNumber] = useState()
    // console.log(props.category)
    console.log(props.pageNumber)
    const pageNumber = props.pageNumber
    // const pageNumber = useSelector((state)=>state.productData.currentPageNumber)
    // console.log(pageNumber)
    // const onPageChange = (e)=>{
    //     console.log(e.selected+1)
       
    //     dispatch(getProducts({
    //       category:props.category||'all',
    //       page:e.selected+1,
    //       limit:5
    //      }))
    //      const pageNumber= e.selected+1
    //       dispatch({type:'PAGENUMBER',payload:pageNumber})
    //     //  setPageNumber(e.selected+1)
    //   }
       const products = useSelector((state)=>state.productData.products)
       console.log(products)
      const [isLoading,setIsLoading] = useState(true)
       
        useEffect(()=>{
        dispatch(getProducts({
         category:props.category||'all', 
         page:pageNumber,
         limit:5
        })) 
      
        },[dispatch])
      
        useEffect(()=>{
          setIsLoading(false)
        },[products])


return <>
        <div className="item-container">
        {isLoading?<Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
        </Box>: <div className="featured" >
          {products.products?.map((item)=>{
      
            return <ItemCard key={item._id} frontImage={barcaImage} items={item} ></ItemCard>
          })    
          }
        </div>
        }
        </div>
        {/* <Paginate pageCount={products.total_pages} onPageChange={onPageChange}/> */}
</>
}