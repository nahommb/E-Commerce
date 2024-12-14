import axios from "axios"
import {baseUrl} from '../../helper/baseUrl'

export const getNumberOfUsersRequest = async ()=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${baseUrl}analytics/number_of_new_users`)
    return response
}