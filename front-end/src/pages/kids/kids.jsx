import { Navbar } from "../../components/navbar/navbar"
import { ItemCard } from "../../components/itemcard/itemcard"
import { useSelector, useDispatch } from "react-redux"
import './kids.css'
import kidBanner from '../../components/assets/kids_banner.png'
import { Footer } from "../../components/footer/footer"
import { ItemContainer } from "../../components/item_container/item_container"
import { Paginate } from "../../components/paginate/paginate"


export const Kids = ()=>{

  const products = useSelector((state)=>state.productData.products)
  const pageNumber = useSelector((state)=>state.productData.kidsPageNumber)
  console.log(pageNumber)

  const dispatch = useDispatch()

  const onPageChange = (e)=>{
      console.log(e.selected+1)
     
      dispatch(getProducts({
        category:props.category||'all',
        page:e.selected+1,
        limit:5
       }))
       const NewPageNumber= e.selected+1
        dispatch({type:'KIDSPAGENUMBER',payload:NewPageNumber})
      //  setPageNumber(e.selected+1)
    }
    return <div>
      
        <div className="kids-boarding">
          <div className="inner-boarding">
            <div className="kid-banner-text">
            <h1>Every fan deserves <br/> <span style={{marginLeft:'10%'}}>the best jersey.</span></h1>
            </div>
           {/* <img className="kid-banner-image" src={kidBanner}></img> */}
          </div>
        </div>

        <ItemContainer category = 'Kids' pageNumber = {pageNumber}/>
        <Paginate pageCount={products.total_pages} onPageChange={onPageChange} pageNumber = {pageNumber}/>
        {
          products.length === 0 &&<div className="kids-spacer"> </div>
        }
        <Footer/>
    </div>
}