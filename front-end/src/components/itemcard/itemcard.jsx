import './itemcard.css'
export const ItemCard =(props)=>{
  return <div className="item-card">
     <div className='item-card-image'>
     <img style={{height:'300px'}} src={props.image}></img>
     </div>
     <div className='item-card-info'>
      
         <h5>Barcelon away kit 24/25</h5>
     <p>$40</p>
     </div>
    
  </div>
}