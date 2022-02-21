import {CartStyled, QuantityStyled, ShippingCartStyled, TotalStyled} from "./styles";
import {useSelector} from "react-redux";
import Icon from "../../atoms/Icon/Icon";
import React from "react";

const ShippingCart =() => {
    const {totalPrice, totalQuantity} = useSelector((state: any) => state.cart)
    return <ShippingCartStyled>
        <CartStyled>
            <Icon icon="cart-black" size={40}/>
            <QuantityStyled>
                {totalQuantity}
            </QuantityStyled>
        </CartStyled>
        <TotalStyled>
            Total: {'$' + totalPrice.toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </TotalStyled>
    </ShippingCartStyled>
}
export default ShippingCart;
