import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import './men.css'
import menBanner from '../../components/assets/boy_banner.png'

export const Men = ()=>{

    const card = [1,2,3,4,5,6]

    return <div>
        <Navbar/>
        <div className="men-boarding">
          <div className="inner-boarding">
            <div className="men-banner-text" >
            <h1>Suit up for victory, <br/><span style={{marginLeft:'10%'}}>wear the legend.</span></h1>
            </div>
           <img className="men-banner-image" src={menBanner}></img>
          </div>
        </div>
        <div className="men">
        {card.map((index,item)=>{
            return <ItemCard key={index}/>
          })
          }   
        </div>
  
    </div>
}