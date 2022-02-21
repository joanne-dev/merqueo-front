import React, {FunctionComponent} from "react";
import {TextStyled} from "./styles";

interface IProps {
    fontSize: string;
    color: string;
    text: string;
}

const Text: FunctionComponent<IProps> = ({fontSize, color, text}) => {
    return (
        <TextStyled
            fontSize={fontSize}
            color={color}
        >
            {text}
        </TextStyled>
    );
}
export default Text;
