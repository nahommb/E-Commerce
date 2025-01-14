import { EMPTYPRODUCTS, FINDPRODUCT, GETPRODUCTS,GETRECENTPRODUCTS, GETSITEDATA} from "../constants";

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

export const getRecentProducts = (data)=>{
    console.log(data);
    return {
        type:GETRECENTPRODUCTS,
        payload:data
    }
}

export const emptyProducts = ()=>{
    return {
        type:EMPTYPRODUCTS
    }
}

export const siteData = ()=>{
    return {
        type:GETSITEDATA
    }
}