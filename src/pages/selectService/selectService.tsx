import React from 'react';

//Component Import
import { AsideSelectService } from './AsideSelectService/AsideSelectService';
import { ContentSelectService } from './ContentSelectService/ContentSelectService';
//Styled Import
import { SelectServiceWrapper } from './selectService.styles';
//Types Import
import { selectServiceProps } from './selectService.types';

export const SelectService: React.FC<selectServiceProps> = props => {
  return (
    <SelectServiceWrapper>
      <AsideSelectService />
      <ContentSelectService onClose={props.onClose} />
    </SelectServiceWrapper>
  );
};
