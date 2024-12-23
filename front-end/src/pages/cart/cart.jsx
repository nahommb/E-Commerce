import DataTable from "react-data-table-component"
import { Navbar } from "../../components/navbar/navbar"
import { CartTable } from "../../components/table/cartTable"
import './cart.css'
import 'react-data-table-component'
import { Footer } from "../../components/footer/footer"
import { useState } from "react"
import { OverlayCard } from "../../components/overlay_card/overlay_card"
import {useSelector } from "react-redux"

export const Cart = ()=>{


    return <>
        {/* <Navbar/> */}
        <div className="table-container">
            <CartTable></CartTable>  
        </div>
        <Footer/>
    </>
}