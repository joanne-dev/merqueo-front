import {actionTypes} from "../types/actionTypes";

export const cartActions = (product: any) => ({
    type: actionTypes.addToCart,
    payload: {
        product
    }
});
