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

   const imageData = {
    ronaldoBack,
      ronaldoFront,
      ronaldoCeneter,
      ronaldoLeft,
      ronaldoRight,
      barcaImage
   }




const onPageChange = (e)=>{
  console.log(e.selected+1)
  dispatch(getProducts({
    category:'retro',
    page:e.selected+1,
    limit:3
   }))
}
 const products = useSelector((state)=>state.productData.products)
const [isLoading,setIsLoading] = useState(true)

const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(getProducts({
   category:'retro',
   page:1,
   limit:3 
  })) 

  },[dispatch])

  useEffect(()=>{
    setIsLoading(false)
  },[products])
  
  
   console.log(products)

    const card = [1,2,3,4,5,6]

    return <div className="shop">
        {/* <Navbar></Navbar> */}
        <Boarding></Boarding>
        <Banner bannerText='Featured Sport Kits'></Banner>
         <div className="featured-text" >
          <h1>Featured Sports wear</h1>
         </div>
         {/* {isLoading?<Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
        </Box>: <div className="featured" >
          {products.products?.map((item)=>{
      
            return <ItemCard key={item._id} frontImage={barcaImage}  index = {item._id} items={item}></ItemCard>
          })    
          }
        </div>
        } */}
         
         <ItemContainer/>
        <div className="shop-banner">

        </div>
        <div className="new-arival">
        <div className="new-arival-text">
        <div>
           <h2>New Collections</h2>
           <p>New arrival and the hottest and newest collection of the month</p>
        </div>
         </div>
        <div className="new-arival-container">
          {products.products?.map((item)=>{
            return <ItemCard key={item._id} frontImage={ronaldoFront} backImage={ronaldoBack} items={item}/>
          })
          }
        </div>
        <Button sx={
          {
            backgroundColor:'rgba(213, 67, 242)',
            color:'#fff',
            border:'none',
            borderRadius:'8px'
          }
        }>Explore more <ArrowRight/> </Button>
        </div>
        <Paginate pageCount={13} onPageChange={onPageChange}/>
        <Footer></Footer>
    </div>
}