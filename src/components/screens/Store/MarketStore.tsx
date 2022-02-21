import {FunctionComponent} from "react";
import {CardsStyled, StoreStyled} from "./styles";
import {useFetchProducts} from "../../../hooks/useFetchProducts";
import Header from "../../organisms/Header/Header";
import ProductCard from "../../molecules/ProductCard/ProductCard";

const Store: FunctionComponent<any> = ({}) => {
    const { results } = useFetchProducts();
    console.log('results: ', results);

    return (
        <StoreStyled>
            <Header productPrice={400}/>
            <CardsStyled>
                {
                    results && results.data &&
                    results.data.map((product: any)=>(
                            <ProductCard
                                id={product.id}
                                name = {product.name}
                                price = {product.price}
                                imageUrl= {product.imageUrl}
                                maxQuantity= {product.quantity}
                            />
                        )
                    )
                }

            </CardsStyled>
        </StoreStyled>
    )
}
export default Store;
