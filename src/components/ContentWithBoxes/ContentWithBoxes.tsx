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
  {
    id: 1,
    icon: 'tooth',
    title: 'Genral Dentistry',
    amount: 3,
    services: [
      { title: 'Root Canal', description: 'Slowly he whom important. Only we height', price: 20 },
      { title: 'Invisilign Braces', description: 'Slowly he whom important. Only we height', price: 30 },
      { title: 'Teeth Whitening', description: 'Slowly he whom important. Only we height', price: 50 },
    ],
  },
  {
    id: 2,
    icon: 'weight',
    title: 'Weight Management',
    amount: 2,
    services: [
      { title: 'Spin Class Indoor', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
      { title: 'Hot Yoga Class', description: 'Slowly he whom important. Only we height', price: 30, durationPrices: [30, 40, 60] },
    ],
  },
  {
    id: 3,
    icon: 'psychology',
    title: 'Psychology Services',
    amount: 3,
    services: [
      {
        title: 'Counseling for Couples',
        description: 'Slowly he whom important. Only we height',
        price: 30,
        durationPrices: [30, 60, 100],
      },
      { title: 'Panic Attacks', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
      { title: 'Stress Management', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
    ],
  },
  {
    id: 4,
    icon: 'massage',
    title: 'Massage and Recovery',
    amount: 2,
    services: [
      { title: 'Deep Tissue Massage', description: 'Slowly he whom important. Only we height', price: 20, durationPrices: [20, 40, 60] },
      { title: 'Hot Stone Massage', description: 'Slowly he whom important. Only we height', price: 40, durationPrices: [40, 50, 80] },
    ],
  },
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
