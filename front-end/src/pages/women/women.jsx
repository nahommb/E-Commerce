import './women.css'
import {ItemCard} from '../../components/itemcard/itemcard'
import { Navbar } from '../../components/navbar/navbar'

export const Women=()=>{
const card = [1,2,3,4,5,6,7,78,8,9,9]
    return <div>
        <Navbar/>
        <div className="women-boarding">
          <div className="inner-boarding">

          </div>
        </div>
        <div className="women">
        {card.map((index,item)=>{
            return <ItemCard key={index}/>
          })
          }   
        </div> 
    </div>
}