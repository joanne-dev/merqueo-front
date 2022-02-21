import react, {FunctionComponent} from "react";
import {HeaderStyled} from "./styles";
import Text from "../../atoms/Text/Text";
import ShippingCart from "../../molecules/ShippingCart/ShippingCart";

const Header: FunctionComponent<any> = () =>{
    return (
        <HeaderStyled>
            <Text text={'Mercado!'} color={'black'} fontSize={'20px'} />
            <ShippingCart />
        </HeaderStyled>
    )
}

export default Header;
