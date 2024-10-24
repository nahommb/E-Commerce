import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import './men.css'
import menBanner from '../../components/assets/boy_banner.png'
import { Banner } from "../../components/banner/banner"

export const Men = ()=>{

    const card = [1,2,3,4,5,6]

    return <div>
        <Navbar/>
        <Banner bannerText='Suit up for victory,wear the legend.' bannerImage={menBanner}/>
        <div className="men">
        {card.map((index,item)=>{
            return <ItemCard key={index}/>
          })
          }   
        </div>
  
    </div>
}