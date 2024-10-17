import './boarding.css'
import bannerGirl from '../../components/assets/shop_banner_girl.png'

export const Boarding = ()=>{
   return <div className="boarding">
           <div className='boarding-text'>
              <p>NEW ARRIVALS ONLY</p>
               <h2>new 👋<br/> collections <br/>for everyone</h2> 
           </div>
           <div className='boarding-image'>
             <img src={bannerGirl}></img>
           </div>
   </div>
}