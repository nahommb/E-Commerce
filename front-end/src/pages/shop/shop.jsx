import { Boarding } from "../../components/boarding/boarding"
import { Footer } from "../../components/footer/footer"
import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import neymar from '../../components/assets/neymar.jpg'
import './shop.css'
import { useNavigate } from "react-router-dom"


export const Shop =()=>{

   const navigate = useNavigate()

    const card = [1,2,3,4,5,6]

    return <>
        <Navbar></Navbar>
        <Boarding></Boarding>
         <div className="women-text" >
          <h2>Popular in Women</h2>
          {/* <img src={neymar}></img> */}
         </div>
        
        <div className="popular-women" >
          {card.map((index,item)=>{
      
            return <ItemCard key={index} image={neymar}  index = {index}></ItemCard>
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
            return <ItemCard key={index}/>
          })
          }
        </div>
        <Footer></Footer>
    </>
}