import React from 'react';

//component import
import { CustomIcon } from '../../CustomIcon/CustomIcon';

//styled import
import { BoxWrapper, ServiceTileContainer, ServiceAmounContainer } from './ServiceBox.styles';

//type import
import { ServiceBoxProps } from './ServiceBox.types';

export const ServiceBox: React.FC<ServiceBoxProps> = props => {
  return (
    <BoxWrapper>
      <CustomIcon type={props.icon} isSmall />
      <ServiceTileContainer>{props.title}</ServiceTileContainer>
      <ServiceAmounContainer>{props.serviceAmount} Services</ServiceAmounContainer>
    </BoxWrapper>
  );
};
