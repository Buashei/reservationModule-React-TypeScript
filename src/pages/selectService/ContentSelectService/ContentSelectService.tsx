import React from 'react';

//Lang Import
import { lang } from '../../../utils/language';

//Styled Import
import {
  ContentWrapper,
  ContentHeader,
  ContentContent,
  ContentFooterWrapper,
  ContentFooterButton,
  ContentFooterButtonContent,
} from './ContentSelectService.styles';
import { FontAwesomeWrapper, H1 } from '../selectService.styles';

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Types Import
import { contentSelectServiceProps } from './ContentSelectService.types';

//Component Import
import { ServiceBoxesGenerator } from '../../../components/ServiceBox/ServiceBoxesGenerator';

const ServiceObject = [
  { id: 1, icon: 'tooth', title: 'Genral Dentistry', amount: 3 },
  { id: 2, icon: 'weight', title: 'Weight Management', amount: 2 },
  { id: 3, icon: 'psychology', title: 'Psychology Services', amount: 3 },
  { id: 4, icon: 'massage', title: 'Massage and Recovery', amount: 2 },
  { id: 5, icon: 'tooth', title: 'Genral Dentistry', amount: 3 },
  { id: 6, icon: 'weight', title: 'Weight Management', amount: 2 },
  { id: 7, icon: 'psychology', title: 'Psychology Services', amount: 3 },
  { id: 8, icon: 'massage', title: 'Massage and Recovery', amount: 2 },
];

export const ContentSelectService: React.FC<contentSelectServiceProps> = props => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <H1>{lang.eng.selectService}</H1>
        <FontAwesomeWrapper onClick={props.onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </FontAwesomeWrapper>
      </ContentHeader>
      <ContentContent className='contentWrapper'>
        <ServiceBoxesGenerator data={ServiceObject} />
      </ContentContent>
      <ContentFooterWrapper>
        <ContentFooterButton>
          <ContentFooterButtonContent />
        </ContentFooterButton>
      </ContentFooterWrapper>
    </ContentWrapper>
  );
};
