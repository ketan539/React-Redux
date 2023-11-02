import { ActionTypes } from "./../contants/action-types"




export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload : products,
    }
};


export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELETED_PRODUCT,
        payload : product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELETED_PRODUCT,
      
    }
}