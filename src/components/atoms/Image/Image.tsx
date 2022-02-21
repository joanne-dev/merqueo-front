import React, {FunctionComponent} from "react";
import ImageDefault from '../../../assets/images/default.png';

interface IProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

const Image: FunctionComponent<IProps> = ({src, alt, width, height}) => {
    return (
        <img
            width={width}
            height={height}
            src={!!src ? src : ImageDefault}
            alt={alt}
        />
    );
}

export default Image;
