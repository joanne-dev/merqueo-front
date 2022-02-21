import {useEffect, useState} from "react";
import {getProducts} from "../services/productsService";

export const useFetchProducts = (): any => {
    const [products, setProducts] = useState({
        results: {}
    });
    useEffect(() => {
        getProducts().then(resultsRes => {
            console.log('resultsRes: ', resultsRes);
            setProducts({
                results: resultsRes
            })
        })
    }, []);
    return products;
};
