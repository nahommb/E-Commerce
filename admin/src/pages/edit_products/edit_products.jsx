import { Button } from "@mui/material"
import { Search } from "@mui/icons-material"

export const EditProducts = ()=>{

 const data = [1,2,3,4,5,6,7,8,]

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
      {data.map((index,data)=>{
        return <div className="custom-table-row">
        <p>Barcelona Away kit 24/25</p>
        <Button style={{color:'black'}}>select</Button>
        </div>
      })}
        
    </div>
}