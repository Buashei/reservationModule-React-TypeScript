import React from 'react';

//Component Import
import { LeftAside } from '../../components/LeftAside/LeftAside';
import { RightAside } from '../../components/RightAside/RightAside';
import { ContentWithBoxes } from '../../components/ContentWithBoxes/ContentWithBoxes';
//Styled Import
import { SelectServiceWrapper } from './selectService.styles';
//Types Import
import { selectServiceProps } from './selectService.types';

export const SelectService: React.FC<selectServiceProps> = props => {
  return (
    <SelectServiceWrapper>
      <LeftAside type={'selectService'} />
      <ContentWithBoxes onClose={props.onClose} data={props.data} formData={props.formData} setFormData={props.setFormData} />
      <RightAside />
    </SelectServiceWrapper>
  );
};
