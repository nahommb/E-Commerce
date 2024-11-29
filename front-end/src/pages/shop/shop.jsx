import { Boarding } from "../../components/boarding/boarding"
import { Footer } from "../../components/footer/footer"
import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"

import './shop.css'
import { useNavigate } from "react-router-dom"
import { Banner } from "../../components/banner/banner"
import { Button,Box } from "@mui/material"
import { ArrowRight } from "@mui/icons-material"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getRecentProducts } from "../../context/redux/product-state/product_action"
import { Paginate } from "../../components/paginate/paginate"
import CircularProgress from '@mui/material/CircularProgress';
import { ItemContainer } from "../../components/item_container/item_container"

export const Shop =()=>{

  //  const navigate = useNavigate()


// const onPageChange = (e)=>{
//   console.log(e.selected+1)
//   dispatch(getProducts({
//     category:'retro',
//     page:e.selected+1,
//     limit:5
//    }))
// }
 const products = useSelector((state)=>state.productData.products)
 const recentProducts = useSelector((state)=>state.productData.recentProducts)
console.log(recentProducts.recentProducts)

const [isLoading,setIsLoading] = useState(true)

const dispatch = useDispatch()

  const pageNumber = useSelector((state)=>state.productData.shopPageNumber)
  const recentProductsPageNumber = useSelector((state)=>state.productData.recentProductsPageNumber)
  console.log(recentProductsPageNumber)
  console.log(pageNumber)
  
  useEffect(()=>{
    dispatch(getRecentProducts({
      page:1,
      limit:8
    }))
  },[dispatch])

  const onPageChange = (e)=>{
    console.log(e.selected+1)
   
    dispatch(getProducts({
      category:'all'||'all',
      page:e.selected+1,
      limit:12
     }))
     const NewPageNumber= e.selected+1
      dispatch({type:'SHOPPAGENUMBER',payload:NewPageNumber})
    //  setPageNumber(e.selected+1)
  }
  
const onRecentProductsPageChange = (e)=>{
  console.log(e.selected+1)

  dispatch(getRecentProducts({
    page:e.selected+1,
    limit:8
  }))
  const NewPageNumber= e.selected+1
   dispatch({type:'RECENTPRODUCTSPAGENUMBER',payload:NewPageNumber})
 //  setPageNumber(e.selected+1)
}

   console.log(products)
   console.log(recentProducts.total_pages)
    

    return <div className="shop">
        {/* <Navbar></Navbar> */}
        <Boarding></Boarding>
        <Banner bannerText='Featured Sport Kits'></Banner>
         <div className="featured-text" >
          <h1>Featured Sports wear</h1>
         </div>
         
         <ItemContainer category='all' pageNumber={pageNumber}/>
         <Paginate pageCount={products.total_pages} onPageChange={onPageChange} pageNumber = {pageNumber}/>

        <div className="shop-banner">
           
        </div>
        <div className="new-arival">
        <div className="new-arival-text">
        <div>
           <h2>New Collections</h2>
           <p>New arrival and the hottest and newest collection of the month</p>
        </div>
         </div>
         {/* <ItemContainer category='recent'/> */}
        <div className="new-arival-container">
          {recentProducts.recentProducts?.map((item)=>{
            return <ItemCard key={item._id} items={item}/>
          })
          }
        </div>
        <Paginate pageCount={recentProducts.total_pages} onPageChange={onRecentProductsPageChange} pageNumber = {recentProductsPageNumber}/>
        {/* <Button sx={
          {
            backgroundColor:'rgba(213, 67, 242)',
            color:'#fff',
            border:'none',
            borderRadius:'8px'
          }
        }>Explore more <ArrowRight/> </Button> */}
        </div>
        {/* <Paginate pageCount={13} onPageChange={onPageChange}/> */}
        <Footer></Footer>
    </div>
}