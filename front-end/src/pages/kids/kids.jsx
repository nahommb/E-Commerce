import { Navbar } from "../../components/navbar/navbar"
import { ItemCard } from "../../components/itemcard/itemcard"
import './kids.css'
import kidBanner from '../../components/assets/kids_banner.png'
import { Footer } from "../../components/footer/footer"
import { ItemContainer } from "../../components/item_container/item_container"

export const Kids = ()=>{


    return <div>
        {/* <Navbar/> */}
        <div className="kids-boarding">
          <div className="inner-boarding">
            <div className="kid-banner-text">
            <h1>Every fan deserves <br/> <span style={{marginLeft:'10%'}}>the best jersey.</span></h1>
            </div>
           <img className="kid-banner-image" src={kidBanner}></img>
          </div>
        </div>
        <ItemContainer/>
        <Footer/>
    </div>
}