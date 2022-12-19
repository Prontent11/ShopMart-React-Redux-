import { ActionType } from "../constants/action-types"
import shopMartApi from "../../api/shopMartApi"
//this is for adding product into the cart
export const setProducts=(products)=>{
    return {
        type:ActionType.SET_PRODUCTS,
        payload:products,
    }
}

//this is for showing data of selected prodct 
export const selectedProduct=(product)=>{
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:product,
    }
}
export const removeSelectedProduct=()=>{
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCT,
    }
}

export const fetchProducts=()=>{

    return async (dispatch)=>{
        const response=await shopMartApi.get('/products');
        console.log(response.data)
        dispatch({
            type:ActionType.FETCH_PRODUCTS,
            payload:response.data,
        })

    }
 
   
}
export const fetchProduct=(id)=>{

    return async (dispatch)=>{
        const response=await shopMartApi.get(`/products/${id}`);
        console.log(response.data)
        dispatch({
            type:ActionType.SELECTED_PRODUCT,
            payload:response.data,
        })

    }
 
   
}

