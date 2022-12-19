import { ActionType } from "../constants/action-types";

const initialState={
    products:[

        // {
        //     id:1,
        //     title:"Yash",
        //     category:"Programmer"
        // }

    ]
}
export const productReducer=(state=initialState,action)=>{

    const {type,payload}=action;
    const {SET_PRODUCTS,FETCH_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} =ActionType;
    
    switch (type) {
        case SET_PRODUCTS:
            return {...state,products:payload};
        case FETCH_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}
export const selectedProductReducer=(state={},action)=>{

    const {type,payload}=action;
    const {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} =ActionType;
    
    switch (type) {
        case SELECTED_PRODUCT:
            return {...state,...payload};
        case REMOVE_SELECTED_PRODUCT:
            return {}
    
        default:
            return state;
    }
}