const ENDPOINT = 'http://localhost:9021';
export const getProducts = async () => {
    const url = `${ENDPOINT}/products`;
    const response = await fetch(url);
    const products = await response.json();
    console.log('products: ', products);
    return products;
}
