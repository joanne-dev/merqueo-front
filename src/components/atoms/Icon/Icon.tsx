import React, { FunctionComponent } from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from '../../../assets/icons/selection.json';

interface IProps {
    icon: string;
    size: number;
    color?: string;
}

const Icon: FunctionComponent<IProps> = ({icon, size, color}) => {
    return <IcoMoon
        icon={icon}
        size={size}
        color={color}
        iconSet={iconSet}
        />;
};

export default Icon;
