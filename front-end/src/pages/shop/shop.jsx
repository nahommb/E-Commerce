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
import { getProducts } from "../../context/redux/product-state/product_action"
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
const [isLoading,setIsLoading] = useState(true)

const dispatch = useDispatch()

  // useEffect(()=>{
  // dispatch(getProducts({
  //  category:'retro',
  //  page:1,
  //  limit:5
  // })) 

  // },[dispatch])

  // useEffect(()=>{
  //   setIsLoading(false)
  // },[products])
  // const products = useSelector((state)=>state.productData.products)
  const pageNumber = useSelector((state)=>state.productData.shopPageNumber)
  console.log(pageNumber)
  
  const onPageChange = (e)=>{
    console.log(e.selected+1)
   
    dispatch(getProducts({
      category:'all'||'all',
      page:e.selected+1,
      limit:5
     }))
     const NewPageNumber= e.selected+1
      dispatch({type:'SHOPPAGENUMBER',payload:NewPageNumber})
    //  setPageNumber(e.selected+1)
  }
  


   console.log(products)

    const card = [1,2,3,4,5,6]

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
         {/* <ItemContainer category='all'/> */}
        {/* <div className="new-arival-container">
          {products.products?.map((item)=>{
            return <ItemCard key={item._id} frontImage={ronaldoFront} backImage={ronaldoBack} items={item}/>
          })
          }
        </div> */}
        <Button sx={
          {
            backgroundColor:'rgba(213, 67, 242)',
            color:'#fff',
            border:'none',
            borderRadius:'8px'
          }
        }>Explore more <ArrowRight/> </Button>
        </div>
        {/* <Paginate pageCount={13} onPageChange={onPageChange}/> */}
        <Footer></Footer>
    </div>
}