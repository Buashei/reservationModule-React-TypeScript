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
        <ServiceBoxesGenerator />
      </ContentContent>
      <ContentFooterWrapper>
        <NextButton>
          <NextButtonContent />
        </NextButton>
      </ContentFooterWrapper>
    </ContentWrapper>
  );
};
