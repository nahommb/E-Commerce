import { useNavigate } from 'react-router-dom'
import './itemcard.css'

export const ItemCard =(props)=>{

    const navigate = useNavigate()

  return <div className="item-card" onClick={()=>navigate(`/products/${props.index}`)}>
     <div className='item-card-image'>
     <img src={props.image}></img>
     </div>
     <div className='item-card-info'>
      
         <h5>{props.index} Barcelona away kit 24/25 </h5>
     <p>$40</p>
     </div>
    
  </div>
}