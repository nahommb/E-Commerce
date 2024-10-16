import { Navbar } from "../../components/navbar/navbar"
import { ItemCard } from "../../components/itemcard/itemcard"
import './kids.css'
export const Kids = ()=>{
const card = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,]
    return <div>
        <Navbar/>
        <div className="kids-boarding">
          <div className="inner-boarding">

          </div>
        </div>
        <div className="kids">
        {card.map((index,item)=>{
            return <ItemCard key={index}/>
          })
          }   
        </div>
    </div>
}