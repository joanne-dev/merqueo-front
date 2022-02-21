import {FunctionComponent} from "react";
import {ButtonStyled} from "./styles";

interface IProps {
    onClick?: (e?:any) => void;
    text: string;
}

const Button: FunctionComponent<IProps> =({onClick, text}) => {
    return <ButtonStyled
        onClick={onClick}>
        {text}
    </ButtonStyled>
}
export default Button;
