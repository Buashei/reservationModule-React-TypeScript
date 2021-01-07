import React from 'react';

//component import
import { CustomIcon } from '../CustomIcon/CustomIcon';

//styled import
import { CustomIconWrapper, BoxWrapper, ServiceTileContainer } from './ServiceBox.styles';

//type import
import { ServiceBoxProps } from './ServiceBox.types';

export const ServiceBox: React.FC<ServiceBoxProps> = props => {
  return (
    <BoxWrapper>
      <CustomIconWrapper>
        <CustomIcon type={'tooth'} isSmall />
      </CustomIconWrapper>
      <ServiceTileContainer>{props.title}</ServiceTileContainer>
    </BoxWrapper>
  );
};
