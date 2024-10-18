import './sidebar.css'
import {Button} from '@mui/material'
import { ShoppingCart, Folder} from '@mui/icons-material';


export const SideBar = ()=>{
    return <>
        <div className='side-bar'>
            <div className="add-product">
               <Button style={{color:'white'}}>
                 <ShoppingCart style={{paddingRight:'8px'}}/>
                  Add products
               </Button>
            </div>
            <div className="list-of-product">
            <Button style={{color:'white'}}>
                 <Folder style={{paddingRight:'8px'}}/>
                  Product List
               </Button>
            </div>
        </div>
    </>
}