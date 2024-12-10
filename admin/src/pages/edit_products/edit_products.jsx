import { Button } from "@mui/material"
import { Search } from "@mui/icons-material"
import { Paginate } from "../../components/paginate/paginate"
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getProducts } from "../../context/redux/products/productsAction"
import './edit_products.css'
export const EditProducts = ()=>{

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false);

  const handleSelect = (productId) => {
    // Toggle selection
    if (selectedProductId === productId) {
        setSelectedProductId(null); // Deselect if already selected
    } else {
        setSelectedProductId(productId); // Select new product
    }
};

const handleDelete = () => {
  console.log('Delete clicked for product ID:', selectedProductId);
}

 const products = useSelector(state=>state.productsReducer.products)

//  console.log(products)
 const dispatch = useDispatch()

 
useEffect(()=>{
  dispatch(getProducts({
    page: 1,
    limit: 8
  }))
},[])
 
const onPageChange = (e)=>{
 console.log(e.selected+1)
 dispatch(getProducts({
  page: e.selected+1,
   limit: 8
 }))
}

    return <div className="p-8 w-full">
    
        <div className="custom-table-row mb-10 bg-light-purple text-white">
        <p>Name</p>
        <div>
        <input className="input-field border-white bg-light-purple"></input>
        <Button style={{color:'white'}}>
            <Search/>
        </Button>   
        </div>
        </div>
      {products.products?.map((product)=>{
        return <div key={product._id} className="custom-table-row">
        <p>{product.product_name}</p>
        <Button style={{
          color:selectedProductId === product._id ? 'white' : 'black',
          backgroundColor: selectedProductId === product._id ? 'purple' : 'transparent',
        }} onClick={()=>handleSelect(product._id)}>
        select
        </Button>
        </div>
      })}
        <Paginate pageCount={products?.total_pages} onPageChange={onPageChange}/>

    <div className="flex justify-end pr-5">
        <Button style={{color:'purple'}}>Edit</Button>
        <Button style={{backgroundColor:'red',color:'white',marginLeft:'10px'}} onClick={()=>setDeletePopup(true)}>Delete</Button>
    </div>
    {deletePopup && selectedProductId!==null &&
    <div className="delete-popup">
      <div className="delete-popup-content">
        <p>Are you sure you want to delete this product?</p>
        <div className="pt-3">
          <Button onClick={() => setDeletePopup(false)}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </div>

    }
  
    </div>
}

