import './boarding.css'
import bannerGirl from '../../components/assets/shop_banner_girl.png'
import boardingBackImage  from '../../components/assets/boarding-back-image.png'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../context/helper/base_url'
import { useEffect } from 'react'
import { siteData } from '../../context/redux/product-state/product_action'

export const Boarding = ()=>{

  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(siteData())
  },[])

  const boardingImage = useSelector((state)=>state.productData.boardingImage)
  console.log(boardingImage)

   return <div className="boarding">
           <div className='boarding-text'>
   
               <h3>Only the latest and greatest <br/> product for you</h3>
               <p>Dress up and go get your dreams </p>
           </div>
           <div className='boarding-image'>
             <img src={boardingImage}></img>
           </div>
   </div>
}