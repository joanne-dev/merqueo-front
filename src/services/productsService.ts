const ENDPOINT = 'https://merqueo-back.herokuapp.com';
export const getProducts = async () => {
    const url = `${ENDPOINT}/products`;
    const response = await fetch(url);
    const products = await response.json();
    return products;
}
