import { Navbar } from "../../components/navbar/navbar"
import { ItemCard } from "../../components/itemcard/itemcard"
import './kids.css'
import kidBanner from '../../components/assets/kids_banner.png'
import { Footer } from "../../components/footer/footer"


export const Kids = ()=>{
const card = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,]
    return <div>
        <Navbar/>
        <div className="kids-boarding">
          <div className="inner-boarding">
            <div className="kid-banner-text">
            <h1>Every fan deserves <br/> <span style={{marginLeft:'10%'}}>the best jersey.</span></h1>
            </div>
           <img className="kid-banner-image" src={kidBanner}></img>
          </div>
        </div>
        <div className="kids">
        {card.map((index,item)=>{
            return <ItemCard key={index}/>
          })
          }   
        </div>
        <Footer/>
    </div>
}