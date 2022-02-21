import {actionTypes} from "../types/actionTypes";
import {ProductState} from "../types/product";
import {
    calculateTotalPrice,
    calculateTotalQuantity,
    getItemsSessionStorage, updateItemsSessionStorage
} from "../helpers/helper";

const initialState = {
    products: getItemsSessionStorage('productsInCart'),
    totalPrice: calculateTotalPrice(),
    totalQuantity: calculateTotalQuantity()
}

export const shippingCartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.addToCart:
            addProduct(state.products, action.payload);
            return {
                products: state.products,
                totalPrice: calculateTotalPrice(),
                totalQuantity: calculateTotalQuantity()
            }
        case actionTypes.removeFromCart:
            const products = removeProduct(state.products, action.payload);
            if(products.length > 0) {
                return {
                    products,
                    totalPrice: calculateTotalPrice(),
                    totalQuantity: calculateTotalQuantity()
                }
            }else {
                return {
                    products: [],
                    totalPrice: 0,
                    totalQuantity: 0
                }
            }
        default:
            return state;
    }
}

export const addProduct = (state: ProductState[], payload: {product: ProductState}) => {
    const productAlreadyExists = state.find((product, index) => {
        const isExists = product.id === payload.product.id;
        if(isExists){
            state[index].id = payload.product.id;
            state[index].name = payload.product.name;
            state[index].price = payload.product.price;
            state[index].totalPrice = state[index].totalPrice + state[index].price;
            state[index].quantity++;
            state[index].stock--;
        }
        return isExists;
    });
   if(!productAlreadyExists) {
       payload.product.stock --;
       state.push(payload.product);
   }
    updateItemsSessionStorage('productsInCart', state);
}

export const removeProduct = (state: ProductState[], payload: {product: ProductState}) => {
    const productAlreadyExists = state.find((product, index) => {
        const isExists = product.id === payload.product.id;
        if(isExists){
            state[index].id = payload.product.id;
            state[index].name = payload.product.name;
            state[index].price = payload.product.price;
            state[index].totalPrice = state[index].totalPrice - state[index].price;
            state[index].quantity--;
            state[index].stock++;
        }
        return isExists;
    });
    if(productAlreadyExists && productAlreadyExists.quantity === 0){
        state = state.filter(products => products.id !== payload.product.id)
    }
    updateItemsSessionStorage('productsInCart', state);
    return state;
}

