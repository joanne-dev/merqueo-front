import {FunctionComponent} from "react";
import {CardsStyled, StoreStyled} from "./styles";
import {useFetchProducts} from "../../../hooks/useFetchProducts";
import Header from "../../organisms/Header/Header";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import {Product} from "../../../types/product";

const MarketStore: FunctionComponent<any> = ({}) => {
    const { results } = useFetchProducts();

    return (
        <StoreStyled>
            <Header productPrice={400}/>
            <CardsStyled>
                {
                    results && results.data &&
                    results.data.map((product: Product)=>(
                            <ProductCard
                                key = {product.id}
                                product = {product}
                            />
                        )
                    )
                }

            </CardsStyled>
        </StoreStyled>
    )
}
export default MarketStore;
