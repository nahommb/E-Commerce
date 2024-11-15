import './sidebar.css'
import {Button} from '@mui/material'
import { ShoppingCart, Folder, ShowChart,Logout ,Receipt,Edit, Person} from '@mui/icons-material';


export const SideBar = (props)=>{
    return <>
        <div className='side-bar'>
        <div className="button-cont">
            <Button onClick={()=>{props.onButtonClick(0)}} className='sidebar-button' style={{color:'#8E05C2'}}>
                 <Receipt style={{paddingRight:'8px'}}/>
                  Orders
               </Button> 
            </div>
            
            <div className="button-cont">
               <Button onClick={()=>{props.onButtonClick(1)}} className='sidebar-button' style={{color:'#8E05C2'}}>
                 <ShoppingCart style={{paddingRight:'8px'}}/>
                  Add products
               </Button>
            </div> 
            <div onClick={()=>{props.onButtonClick(2)}} className="button-cont">
            <Button className='sidebar-button' style={{color:'#8E05C2'}} >
                 <Folder style={{paddingRight:'8px'}}/>
                  Product List
               </Button>
            </div>
            <div className="button-cont">
            <Button onClick={()=>{props.onButtonClick(3)}} className='sidebar-button' style={{color:'#8E05C2'}}>
                 <Edit style={{paddingRight:'8px'}}/>
                  Edit Products
               </Button> 
            </div>
            <div className="button-cont">
            <Button onClick={()=>{props.onButtonClick(4)}} className='sidebar-button' style={{color:'#8E05C2'}} >
                 <ShowChart style={{paddingRight:'8px'}}/>
                  Analytics
               </Button> 
            </div>
            <div className="button-cont">
            <Button onClick={()=>{props.onButtonClick(5)}} className='sidebar-button' style={{color:'#8E05C2'}}>
                 <Logout style={{paddingRight:'8px'}}/>
                  Logout
               </Button> 
            </div>
            <div className="button-cont">
            <Button onClick={()=>{props.onButtonClick(6)}} className='sidebar-button' style={{color:'#8E05C2'}}>
                 <Person style={{paddingRight:'8px'}}/>
                  Profile
               </Button> 
            </div>
        </div>
    </>
}