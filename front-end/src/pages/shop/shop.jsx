import { Boarding } from "../../components/boarding/boarding"
import { Footer } from "../../components/footer/footer"
import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import { barcaImage,manutdImage, ronaldoBack, ronaldoFront,ronaldoCeneter,ronaldoLeft,ronaldoRight } from "../../comman/helper/images"

import './shop.css'
import { useNavigate } from "react-router-dom"
import { Banner } from "../../components/banner/banner"
import { Button } from "@mui/material"
import { ArrowRight } from "@mui/icons-material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "../../context/redux/product-state/product_action"
import { Paginate } from "../../components/paginate/paginate"


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

const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getProducts({
   category:'retro',
   page:1,
   limit:3
  }))
  },[])

    const card = [1,2,3,4,5,6]

    return <div className="shop">
        {/* <Navbar></Navbar> */}
        <Boarding></Boarding>
        <Banner bannerText='Featured Sport Kits'></Banner>
         <div className="featured-text" >
          <h1>Featured Sports wear</h1>
         </div>
         
        <div className="featured" >
          {card.map((index,item)=>{
      
            return <ItemCard key={index} frontImage={barcaImage}  index = {index}></ItemCard>
          })
          }
        </div>
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
          {card.map((index,item)=>{
            return <ItemCard key={index} frontImage={ronaldoFront} backImage={ronaldoBack} index={index}/>
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