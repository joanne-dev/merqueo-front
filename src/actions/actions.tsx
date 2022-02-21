import {actionTypes} from "../types/actionTypes";
import {ProductState} from "../types/product";

export const addToCart = (product: ProductState) => ({
    type: actionTypes.addToCart,
    payload: {
        product
    }
});

export const removeFromCart = (product: ProductState) => ({
    type: actionTypes.removeFromCart,
    payload: {
        product
    }
});
