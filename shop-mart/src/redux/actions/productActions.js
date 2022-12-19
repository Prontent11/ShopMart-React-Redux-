import { ActionType } from "../constants/action-types"

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