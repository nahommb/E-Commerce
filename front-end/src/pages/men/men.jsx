import { ItemCard } from "../../components/itemcard/itemcard"
import { Navbar } from "../../components/navbar/navbar"
import './men.css'

export const Men = ()=>{

    const card = [1,2,3,4,5,6]

    return <div>
        <Navbar/>
        <div className="men-boarding">
          <div className="inner-boarding">

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