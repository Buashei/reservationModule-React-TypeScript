import React from 'react';
import { CustomIconProps } from './CustomIcon.types';
import { Img } from './CustomIcon.styles';

import iconPath from '../../assets/icons/iconPath';

export const CustomIcon: React.FC<CustomIconProps> = props => {
  return <Img src={iconPath[props.type]} />;
};
