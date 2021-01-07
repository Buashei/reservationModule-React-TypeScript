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
import { ServiceBox } from '../../../components/ServiceBox/ServiceBox';

export const ContentSelectService: React.FC<contentSelectServiceProps> = props => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <H1>{lang.eng.selectService}</H1>
        <FontAwesomeWrapper onClick={props.onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </FontAwesomeWrapper>
      </ContentHeader>
      <ContentContent>
        <ServiceBox title='Random Title' />
      </ContentContent>
      <ContentFooterWrapper>
        <ContentFooterButton>
          <ContentFooterButtonContent></ContentFooterButtonContent>
        </ContentFooterButton>
      </ContentFooterWrapper>
    </ContentWrapper>
  );
};
