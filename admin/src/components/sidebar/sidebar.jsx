import './sidebar.css'
import {Button} from '@mui/material'
import { ShoppingCart, Folder, ShowChart,Logout} from '@mui/icons-material';


export const SideBar = ()=>{
    return <>
        <div className='side-bar'>
            <div className="button-cont">
               <Button style={{color:'white'}}>
                 <ShoppingCart style={{paddingRight:'8px'}}/>
                  Add products
               </Button>
            </div>
            <div className="button-cont">
            <Button style={{color:'white'}}>
                 <Folder style={{paddingRight:'8px'}}/>
                  Product List
               </Button>
            </div>
            <div className="button-cont">
            <Button style={{color:'white'}}>
                 <ShowChart style={{paddingRight:'8px'}}/>
                  Statestics
               </Button> 
            </div>
            <div className="button-cont">
            <Button style={{color:'white'}}>
                 <Logout style={{paddingRight:'8px'}}/>
                  Logout
               </Button> 
            </div>
        </div>
    </>
}