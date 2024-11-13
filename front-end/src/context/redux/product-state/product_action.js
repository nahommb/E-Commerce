import { FINDPRODUCT, GETPRODUCTS,} from "../constants";

export const getProducts= (data)=>{
    console.log(data);
    return {
        type:GETPRODUCTS,
        payload:data
    }
} 

export const findProduct = (data)=>{
    console.log(data)
    return {
        type:FINDPRODUCT,
        payload:data
    }
}