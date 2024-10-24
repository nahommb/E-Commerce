import { Boarding } from "../../components/boarding/boarding"
import { Footer } from "../../components/footer/footer"
import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import neymar from '../../components/assets/neymar.jpg'
import barca from '../../components/assets/barca_kit.jpg'
import './shop.css'
import { useNavigate } from "react-router-dom"
import { Banner } from "../../components/banner/banner"


export const Shop =()=>{

   const navigate = useNavigate()

    const card = [1,2,3,4,5,6]

    return <div className="shop">
        <Navbar></Navbar>
        <Boarding></Boarding>
        <Banner bannerText='Featured Sport Kits'></Banner>
         <div className="featured-text" >
          <h1>Featured Sports wear</h1>
         </div>
         
        <div className="popular-women" >
          {card.map((index,item)=>{
      
            return <ItemCard key={index} image={barca}  index = {index}></ItemCard>
          })
          }
        </div>
        <div className="shop-banner">

        </div>
        <div className="women-text">
          <h2>New Collections</h2>
          
         </div>
        <div className="popular-women">
          {card.map((index,item)=>{
            return <ItemCard key={index} image={neymar} index={index}/>
          })
          }
        </div>
        <Footer></Footer>
    </div>
}