import DataTable from "react-data-table-component"
import { Navbar } from "../../components/navbar/navbar"
import { CartTable } from "../../components/table/cartTable"
import './cart.css'
import 'react-data-table-component'
import { Footer } from "../../components/footer/footer"

export const Cart = ()=>{
  
    return <>
        <Navbar/>
        <div className="table-container">
            <CartTable></CartTable>  
        </div>
        <Footer/>
    </>
}