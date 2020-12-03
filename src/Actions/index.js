import * as types from "./../Constants/ActionTypes";
export const actAddToCart = (product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
}
export const removeProductInCart = (product)=>{
    return {
        type:types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const updateProductInCart = (product,quantity)=>{
    return {
        type:types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}