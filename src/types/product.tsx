export type Product = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    quantity: number
}

export type ProductState = {
    id: string,
    name: string,
    price: number,
    totalPrice: number,
    quantity: number,
    stock: number
}
