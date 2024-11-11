import { GETPRODUCTS,} from "../constants";

export const getProducts= (data)=>{
    console.log(data);
    return {
        type:GETPRODUCTS,
        payload:data
    }
} 