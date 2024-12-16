import axios from "axios"
import {baseUrl} from '../../helper/baseUrl'

export const getNumberOfUsersRequest = async ()=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${baseUrl}analytics/number_of_new_users`)
    return response
}

export const getNumberOfProductsSoldRequest = async ()=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${baseUrl}analytics/number_of_products_sold`)
    return response
}

export const getDeliveredAndNotDeliveredRequest = async ()=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${baseUrl}analytics/number_of_orders_delivered`)
    return response
}

export const getMostSoldCategoryRequest = async ()=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${baseUrl}analytics/most_sold_category`)
    return response
}