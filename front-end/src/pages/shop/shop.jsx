import { Boarding } from "../../components/boarding/boarding"
import { Footer } from "../../components/footer/footer"
import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import {Barcelona_logo,Manutd_logo,Intermilan_logo,Chelsea_logo,RealMadrid_logo,Liverpool_logo,Juventus_logo,Arsenal_logo,Dortmund_logo,Benfica_logo,PSG_logo} from '../../comman/helper/images'
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
console.log(products)

    
const [isLoading,setIsLoading] = useState(true)

const dispatch = useDispatch()

  const pageNumber = useSelector((state)=>state.productData.shopPageNumber)
  const recentProductsPageNumber = useSelector((state)=>state.productData.recentProductsPageNumber)

  
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

  //  console.log(products)
  //  console.log(recentProducts.total_pages)
    
  const logo = [
    Manutd_logo,Arsenal_logo,,RealMadrid_logo,Juventus_logo,
    Dortmund_logo,Benfica_logo,PSG_logo,Liverpool_logo,Chelsea_logo,
    Benfica_logo,Intermilan_logo,Barcelona_logo,Manutd_logo,
  ]


    return <div className="shop">
       
        <Boarding></Boarding>
        <div className="shop-banner-container">
        <Banner bannerText='Featured Sport Kits' images={logo}></Banner>
        </div>
         <div className="featured-text" >
          <h1>Featured Sports wear</h1>
         </div>
         
         <ItemContainer category='all' pageNumber={pageNumber}/>
         <Paginate pageCount={products.total_pages} onPageChange={onPageChange} pageNumber = {pageNumber}/>

        <div className="shop-banner-container">
          <div className="shop-banner">

          </div>
        </div>
        <div className="new-arival">
        <div className="new-arival-text">
        <div>
           <h2>New Collections</h2>
           <p>New arrival and the hottest and newest collection of the month</p>
        </div>
         </div>
        
        <div className="new-arival-container"> 
        
        {recentProducts.length===0?
        <div className="circular-progress"><CircularProgress/></div>:
        
         <>{recentProducts.recentProducts?.map((item)=>{
            return <ItemCard key={item._id} items={item}/>
          })
          }</>
        }
        
         
        </div>
        <Paginate pageCount={recentProducts.total_pages} onPageChange={onRecentProductsPageChange} pageNumber = {recentProductsPageNumber}/>
    
        </div>
        
        <Footer></Footer>
    </div>
}