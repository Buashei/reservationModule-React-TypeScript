import React from 'react';

//Lang Import
import { lang } from '../../utils/language';

//Styled Import
import {
  ContentWrapper,
  ContentHeader,
  ContentContent,
  ContentFooterWrapper,
  NextButton,
  NextButtonContent,
} from './ContentWithBoxes.styles';
import { FontAwesomeWrapper, H1 } from '../../pages/selectService/selectService.styles';

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Types Import
import { contentSelectServiceProps } from './ContentWithBoxes.types';

//Component Import
import { ServiceBoxesGenerator } from '../ServiceBox/ServiceBoxesGenerator';

const ServiceObject = [
  { id: 1, icon: 'tooth', title: 'Genral Dentistry', amount: 3 },
  { id: 2, icon: 'weight', title: 'Weight Management', amount: 2 },
  { id: 3, icon: 'psychology', title: 'Psychology Services', amount: 3 },
  { id: 4, icon: 'massage', title: 'Massage and Recovery', amount: 2 },
  { id: 5, icon: 'tooth', title: 'Genral Dentistry', amount: 3 },
  { id: 6, icon: 'weight', title: 'Weight Management', amount: 2 },
  { id: 7, icon: 'psychology', title: 'Psychology Services', amount: 3 },
  { id: 8, icon: 'massage', title: 'Massage and Recovery', amount: 2 },
  { id: 9, icon: 'tooth', title: 'Genral Dentistry', amount: 3 },
  { id: 10, icon: 'weight', title: 'Weight Management', amount: 2 },
  { id: 11, icon: 'psychology', title: 'Psychology Services', amount: 3 },
  { id: 12, icon: 'massage', title: 'Massage and Recovery', amount: 2 },
];

export const ContentWithBoxes: React.FC<contentSelectServiceProps> = props => {
  return (
    <ContentWrapper className='pierożek'>
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
        <NextButton>
          <NextButtonContent />
        </NextButton>
      </ContentFooterWrapper>
    </ContentWrapper>
  );
};
