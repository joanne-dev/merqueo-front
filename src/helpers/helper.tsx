import {ProductState} from "../types/product";

export const getItemsSessionStorage = (key: string): any[] => {
    const itemString = sessionStorage.getItem(key);
    let itemsObject = []
    if(itemString){
        itemsObject = JSON.parse(itemString);
    }
    return itemsObject;
}

export const updateItemsSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export function sumTotal(total: number, currentValue: ProductState) {
    return total + currentValue.totalPrice;
}

export function sumQuantity(total: number, currentValue: ProductState) {
    return total + currentValue.quantity;
}

export const calculateTotalPrice = () => {
    const productsFromSession = getItemsSessionStorage('productsInCart');
    let total = 0
    if(productsFromSession.length >0) {
        total = productsFromSession.reduce(sumTotal, 0);
    }
    return total;
}

export const calculateTotalQuantity = () => {
    const productsFromSession = getItemsSessionStorage('productsInCart');
    let total = 0
    if(productsFromSession.length >0) {
        total =  productsFromSession.reduce(sumQuantity, 0);
    }
    return total;
}


