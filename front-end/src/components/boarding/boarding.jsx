import './boarding.css'
import bannerGirl from '../../components/assets/shop_banner_girl.png'
import boardingBackImage  from '../../components/assets/boarding-back-image.png'


export const Boarding = ()=>{
   return <div className="boarding">
           <div className='boarding-text'>
   
               <h3>Only the latest and greatest <br/> product for you</h3> 
               <p>Dress up and go get your dreams </p>
           </div>
           <div className='boarding-image'>
             <img src={bannerGirl}></img>
           </div>
   </div>
}