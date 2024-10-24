import './boarding.css'
import bannerGirl from '../../components/assets/shop_banner_girl.png'

export const Boarding = ()=>{
   return <div className="boarding">
           <div className='boarding-text'>
   
               <h5>Only the latest and greatest <br/> product for you</h5> 
               <p>Dress up and go get your dreams </p>
           </div>
           <div className='boarding-image'>
             <img src={bannerGirl}></img>
           </div>
   </div>
}