import React, {FunctionComponent} from "react";
import {IconStyled, ProductActionStyled, ProductCardStyled} from "./styles";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import {Product, ProductState} from "../../../types/product";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../../actions/actions";
import Icon from "../../atoms/Icon/Icon";
import {useCounter} from "../../../hooks/useCounter";
interface IProps {
    product: Product
}

const ProductCard: FunctionComponent<IProps> = ({product})=> {

    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();

    const cartState = useSelector((state: any) => state.cart);
    let productStateFromRedux: any;
    if(cartState.products.length > 0) {
        productStateFromRedux = cartState.products.find((prod: any) => prod.id === product.id);
    }
    const { counter, increment, decrement} = useCounter(
        productStateFromRedux ? productStateFromRedux.quantity : 0, product.quantity);

    const productState: ProductState = {
        id: product.id,
        name: product.name,
        price: product.price,
        totalPrice: productStateFromRedux? productStateFromRedux.totalPrice: product.price,
        quantity: productStateFromRedux? productStateFromRedux.quantity: 1,
        stock: productStateFromRedux? productStateFromRedux.stock : product.quantity
    }

    const dispatchAddToCart =()=> {
        increment();
        if(product.quantity !== counter ) {
            dispatch(addToCart(productState));
        }
    }
    const dispatchRemoveFromCartDispatch =()=> {
        dispatch(removeFromCart(productState));
        decrement();
    }


    return <ProductCardStyled>
        <Image
            src={imageUrl}
            alt={name}
            height={'200'}
            width={'150'}
        >
        </Image>
        <Text
            fontSize={'12px'}
            color={'black'}
            text={name}
        >
        </Text>
        <Text
            fontSize={'14px'}
            color={'black'}
            text={'$' + price.toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        >
        </Text>
        {
            (counter > 0 ) &&
            <ProductActionStyled>
                <IconStyled onClick={()=>dispatchRemoveFromCartDispatch()}>
	                <Icon icon="icon_substract" size={20}  />
                </IconStyled>

                {counter}
                <IconStyled className="add" onClick={()=>dispatchAddToCart()}>
	                <Icon icon="icon_sum" size={20} color={'white'} />
                </IconStyled>
            </ProductActionStyled>
        }
        {
            (counter < 1 ) &&
            <Button
	            onClick={()=>dispatchAddToCart()}
	            text={'Comprar'}
            >
            </Button>
        }

    </ProductCardStyled>
}
export default ProductCard;
